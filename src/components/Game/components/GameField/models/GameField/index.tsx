import anime from 'animejs';
import { compact, difference, uniq } from 'lodash';
import { animateOpacity } from 'src/shared/animateOpacity';
import { ElementModel } from 'src/shared/ElementModel';
import { findSafe } from 'src/shared/findSafe';
import { wait } from 'src/shared/wait';
import { Nullable, Point } from 'src/types';
import { Direction as PlateDirection, State as PlateState } from '../../components/Plate/types';
import { Plate } from '../Plate';
import { Data, Options } from './types';

export class GameField extends ElementModel<HTMLDivElement> {
  public readonly headerTitle: ElementModel<HTMLDivElement>;

  public readonly taskBlocks: {
    image: ElementModel<HTMLDivElement>;
    cells: ElementModel<HTMLDivElement>;
    word: ElementModel<HTMLDivElement>;
  }[];

  public readonly taskText: ElementModel<HTMLDivElement>;

  public readonly successText = new ElementModel<HTMLDivElement>({
    props: { children: 'Выполнено!', style: { opacity: 0 } },
  });

  public readonly selectedWord = new ElementModel<
    HTMLDivElement,
    {
      style?: React.CSSProperties;
      word: Nullable<string>;
      isCloseButtonMounted: boolean;
      isCloseButtonActive: boolean;
      onCloseButtonClick?: React.MouseEventHandler;
    }
  >({
    props: { word: null, isCloseButtonActive: false, isCloseButtonMounted: true },
  });

  public readonly field: ElementModel<HTMLDivElement>;

  public readonly plates: Plate[];

  public readonly successCheckMark = new ElementModel<SVGSVGElement>({
    props: { style: { display: 'none', opacity: 0 } },
  });

  public readonly nextButton = new ElementModel<HTMLDivElement>({
    props: { style: { display: 'none', opacity: 0 } },
  });

  public readonly data: Data;

  protected readonly _selectionData = {
    plates: [] as Plate[],
    state: 'selected' as PlateState,
    hasDirections: false,
    hasDark: false,
  };

  public constructor(public readonly options: Options) {
    super(options);
    this.headerTitle = new ElementModel(
      'text' in options.headerTitle
        ? {
            props:
              typeof options.headerTitle.text === 'string'
                ? { dangerouslySetInnerHTML: { __html: options.headerTitle.text } }
                : { children: options.headerTitle.text },
          }
        : options.headerTitle,
    );
    this.taskBlocks = options.tasks.map((taskData) => ({
      image: new ElementModel({
        props: { style: { backgroundImage: `url(${taskData.imageSrc})` } },
      }),
      cells: new ElementModel(),
      word: new ElementModel({
        props: { style: { opacity: 0 }, children: taskData.word },
      }),
    }));
    this.taskText = new ElementModel(
      'text' in options.taskText
        ? { props: { children: options.taskText.text } }
        : options.taskText,
    );
    this.field = new ElementModel(options.field);
    this.plates = compact(
      options.plates
        .map((row, i) =>
          row.map((value, j) =>
            value === ' '
              ? null
              : new Plate({
                  x: j,
                  y: i,
                  letter: value,
                  props: { state: 'default', directions: [], isActive: false, isHoverable: true },
                }),
          ),
        )
        .flat(),
    );
    this.data = options.tasks.map((taskData) => ({
      word: taskData.word,
      isResolved: false,
      expectedCells: taskData.expectedCells,
    }));
  }

  public async runWithSelectionByClick() {
    this.selectedWord.setProp('isCloseButtonMounted', true);
    this._selectionData.state = 'selected';
    this._selectionData.hasDirections = false;

    while (!this._checkIfAllWordsResolved()) {
      this._selectionData.plates = [];

      while (!this._checkIfSelectedWordExists()) {
        let activePlates: Plate[] = [];

        if (this._selectionData.plates.length) {
          const lastSelectedPlate =
            this._selectionData.plates[this._selectionData.plates.length - 1];
          activePlates = uniq([
            ...this._selectionData.plates,
            ...this._getNearPlates(lastSelectedPlate).filter(
              (plate) => plate.props.style?.opacity !== 0,
            ),
          ]);
        } else {
          activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);
        }

        const inactivePlates = this.plates.filter(
          (plate) => plate.props.style?.opacity !== 0 && !activePlates.includes(plate),
        );
        activePlates.forEach((plate) => plate.setProp('isActive', true));

        this.selectedWord.setProp('isCloseButtonActive', true);
        const clickedItem = await Promise.race([
          ...activePlates.map(
            (plate) =>
              new Promise<Plate>((resolve) => plate.setProp('onClick', () => resolve(plate))),
          ),
          ...inactivePlates.map(
            (plate) =>
              new Promise<Plate>((resolve) => plate.setProp('onClick', () => resolve(plate))),
          ),
          new Promise<typeof this.selectedWord>((resolve) =>
            this.selectedWord.setProp('onCloseButtonClick', () => resolve(this.selectedWord)),
          ),
          new Promise<void>((resolve) => {
            document.body.onkeyup = (e) => e.key === 'Escape' && resolve();
          }),
        ]);
        activePlates.forEach((plate) => plate.setProp('onClick', undefined));
        activePlates.forEach((plate) => plate.setProp('isActive', false));
        this.selectedWord.setProp('isCloseButtonActive', false);

        if (clickedItem instanceof Plate && activePlates.includes(clickedItem)) {
          const clickedPlate = clickedItem;

          if (clickedPlate.props.state === 'default') {
            this._selectionData.plates = [...this._selectionData.plates, clickedPlate];
          } else {
            const clickedPlateQueueIndex = this._selectionData.plates.indexOf(clickedPlate);
            const resettingPlates = this._selectionData.plates.slice(
              clickedPlateQueueIndex,
              this._selectionData.plates.length,
            );
            this._selectionData.plates = difference(this._selectionData.plates, resettingPlates);
          }

          this._updatePlateStates();

          if (this._selectionData.plates.length) {
            this._writeSelectedWord(
              this._selectionData.plates.map((plate) => plate.props.children).join(''),
            );
          } else {
            this._eraseSelectedWord();
          }
        } else if (clickedItem instanceof Plate && inactivePlates.includes(clickedItem)) {
          const clickedPlate = clickedItem;
          this._selectionData.plates = [clickedPlate];
          this._updatePlateStates();
          this._writeSelectedWord(
            this._selectionData.plates.map((plate) => plate.props.children).join(''),
          );
        } else {
          this._eraseSelectedWord();
          this._selectionData.plates = [];
          this._updatePlateStates();
        }
      }

      const word = this._selectionData.plates.map((plate) => plate.letter).join('');
      const wordTaskIndex = this.data.findIndex((taskData) => taskData.word === word);

      this.data[wordTaskIndex].isResolved = true;
      this._updatePlateStates();
      this._successSelectedWord();
      this._selectionData.plates.forEach((plate) => plate.setProp('state', 'success'));
      difference(this.plates, this._selectionData.plates).forEach((plate) =>
        plate.setProp('state', 'default'),
      );
      await wait(500);
      await Promise.all([
        ...this._selectionData.plates.map((plate) => this._hidePlateByPoint(plate)),
        this._moveSelectedWordToTaskBlock(),
        this._toggleTaskBlockByTaskBlockIndex(wordTaskIndex),
      ]);
      this.selectedWord.setProp('word', null);
      this.selectedWord.setProp('isCloseButtonMounted', true);

      if (!this._checkIfAllWordsResolved()) {
        await this._showTaskText();
      }
    }

    await this._runSuccessCheckMarkAndNextButton();
  }

  public async runWithSelectionByPressAndDrag() {
    this.selectedWord.setProp('isCloseButtonMounted', false);
    this._selectionData.state = 'pressed';
    this._selectionData.hasDirections = true;

    while (!this._checkIfAllWordsResolved()) {
      this._selectionData.plates = [];
      const activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);

      activePlates.forEach((plate) => plate.setProp('isActive', true));

      const pressedPlate = await Promise.race(
        activePlates.map(
          (plate) =>
            new Promise<Plate>((resolve) => plate.setProp('onMouseDown', () => resolve(plate))),
        ),
      );

      this._selectionData.plates.push(pressedPlate);
      this._updatePlateStates();
      this._writeSelectedWord(
        this._selectionData.plates.map((plate) => plate.props.children).join(''),
      );

      await new Promise<void>((resolve) => {
        this.setProp('onMouseUp', () => resolve());
        document.body.onkeyup = (e) => e.key === 'Escape' && resolve();

        activePlates.forEach((plate) => {
          plate.setProp('onMouseEnter', () => {
            if (this._selectionData.plates.includes(plate)) {
              const currentSelectedPlateIndex = this._selectionData.plates.indexOf(plate);
              this._selectionData.plates = this._selectionData.plates.slice(
                0,
                currentSelectedPlateIndex + 1,
              );
            } else {
              const lastSelectedPlate =
                this._selectionData.plates[this._selectionData.plates.length - 1];
              const nearPlates = this._getNearPlates(lastSelectedPlate);

              if (nearPlates.includes(plate)) {
                this._selectionData.plates.push(plate);
              }
            }

            this._updatePlateStates();
            this._writeSelectedWord(
              this._selectionData.plates.map((plate) => plate.props.children).join(''),
            );

            if (this._checkIfSelectedWordExists()) resolve();
          });
        });
      });
      activePlates.forEach((plate) => plate.setProp('onMouseEnter', undefined));

      if (this._checkIfSelectedWordExists()) {
        const wordTaskIndex = this.data.findIndex(
          (taskData) => taskData.word === this.selectedWord.props.word,
        );

        this.data[wordTaskIndex].isResolved = true;
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'pressedSuccess', isActive: false }),
        );
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        this._successSelectedWord();
        await wait(500);
        await Promise.all([
          ...this._selectionData.plates.map((plate) =>
            animateOpacity({ element: plate, fromOpacity: 1, toOpacity: 0 }),
          ),
          this._moveSelectedWordToTaskBlock(),
          this._toggleTaskBlockByTaskBlockIndex(wordTaskIndex),
          !this._checkIfAllWordsResolved() && this._showTaskText(),
        ]);
      } else if (this.selectedWord.props.word?.length !== 1) {
        this._selectionData.plates.forEach((plate) => plate.setProp('state', 'pressedError'));
        this.selectedWord.updateStyle({ backgroundColor: '#FF0000', color: '#FFFFFF' });
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        await wait(1000);
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'default', directions: [] }),
        );
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
        this.selectedWord.setProp('word', null);
      } else {
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'default', directions: [] }),
        );
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
        this.selectedWord.setProp('word', null);
      }

      activePlates.forEach((plate) => plate.setProp('isActive', false));
    }

    await this._runSuccessCheckMarkAndNextButton();
  }

  public async runWithSelectionByClickAndDrag() {
    this.selectedWord.setProp('isCloseButtonMounted', false);
    this._selectionData.state = 'pressed';
    this._selectionData.hasDirections = true;

    while (!this._checkIfAllWordsResolved()) {
      this._selectionData.plates = [];
      const activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);

      activePlates.forEach((plate) => plate.setProp('isActive', true));

      const pressedPlate = await Promise.race(
        activePlates.map(
          (plate) =>
            new Promise<Plate>((resolve) => plate.setProp('onClick', () => resolve(plate))),
        ),
      );

      this._selectionData.plates.push(pressedPlate);
      this._updatePlateStates();
      this._writeSelectedWord(
        this._selectionData.plates.map((plate) => plate.props.children).join(''),
      );
      await wait(10);

      await new Promise<void>((resolve) => {
        this.setProp('onClick', () => resolve());
        document.body.onkeyup = (e) => e.key === 'Escape' && resolve();

        activePlates.forEach((plate) => {
          plate.setProp('onMouseEnter', () => {
            if (this._selectionData.plates.includes(plate)) {
              const currentSelectedPlateIndex = this._selectionData.plates.indexOf(plate);
              this._selectionData.plates = this._selectionData.plates.slice(
                0,
                currentSelectedPlateIndex + 1,
              );
            } else {
              const lastSelectedPlate =
                this._selectionData.plates[this._selectionData.plates.length - 1];
              const nearPlates = this._getNearPlates(lastSelectedPlate);

              if (nearPlates.includes(plate)) {
                this._selectionData.plates.push(plate);
              }
            }

            this._updatePlateStates();
            this._writeSelectedWord(
              this._selectionData.plates.map((plate) => plate.props.children).join(''),
            );

            if (this._checkIfSelectedWordExists()) resolve();
          });
        });
      });

      activePlates.forEach((plate) => plate.setProp('onMouseEnter', undefined));

      if (this._checkIfSelectedWordExists()) {
        const wordTaskIndex = this.data.findIndex(
          (taskData) => taskData.word === this.selectedWord.props.word,
        );

        this.data[wordTaskIndex].isResolved = true;
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'pressedSuccess', isActive: false }),
        );
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        this._successSelectedWord();
        await wait(500);
        await Promise.all([
          ...this._selectionData.plates.map((plate) =>
            animateOpacity({ element: plate, fromOpacity: 1, toOpacity: 0 }),
          ),
          this._moveSelectedWordToTaskBlock(),
          this._toggleTaskBlockByTaskBlockIndex(wordTaskIndex),
          !this._checkIfAllWordsResolved() && this._showTaskText(),
        ]);
      } else if (this.selectedWord.props.word?.length !== 1) {
        this._selectionData.plates.forEach((plate) => plate.setProp('state', 'pressedError'));
        this.selectedWord.updateStyle({ backgroundColor: '#FF0000', color: '#FFFFFF' });
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        await wait(1000);
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'default', directions: [] }),
        );
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
      } else {
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: 'default', directions: [] }),
        );
        difference(this.plates, this._selectionData.plates).forEach((plate) =>
          plate.setProp('state', 'default'),
        );
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
      }

      activePlates.forEach((plate) => plate.setProp('isActive', false));
    }

    await this._runSuccessCheckMarkAndNextButton();
  }

  public reset() {
    this.taskBlocks.forEach((taskBlock) => {
      taskBlock.cells.updateStyle({ display: '', opacity: '' });
      taskBlock.word.updateStyle({ opacity: 0 });
    });
    this.taskText.updateStyle({ display: '', opacity: '' });
    this.successText.updateStyle({ opacity: 0 });
    this.successCheckMark.updateStyle({ display: 'none', opacity: 0 });
    this.nextButton.updateStyle({ display: 'none', opacity: 0 });
    this.data.forEach((dataItem) => (dataItem.isResolved = false));
    this._selectionData.plates = [];
    this.plates.forEach((plate) => {
      plate.updateProps({
        style: {},
        state: 'default',
        directions: [],
        isActive: false,
        isHoverable: true,
      });
    });
  }

  public toggleHint() {
    if (this._selectionData.hasDark) {
      this.hintOff();
    } else {
      this.hintOn();
    }
  }

  public hintOn() {
    this._selectionData.hasDark = true;
    this._updatePlateStates();
  }

  public hintOff() {
    this._selectionData.hasDark = false;
    this._updatePlateStates();
  }

  protected _updatePlateStates() {
    if (this._selectionData.hasDark) {
      if (this._selectionData.plates.length) {
        const otherPlates = difference(this.plates, this._selectionData.plates);
        otherPlates.forEach((plate) => plate.updateProps({ state: 'dark', directions: [] }));
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: this._selectionData.state }),
        );
        const lastSelectedPlate = this._selectionData.plates[this._selectionData.plates.length - 1];
        const nearPlates = this._getNearPlates(lastSelectedPlate);
        nearPlates.forEach((plate) => {
          if (!this._selectionData.plates.includes(plate)) {
            plate.updateProps({ state: 'default', directions: [] });
          }
        });
      } else {
        const otherPlates = difference(this.plates, this._selectionData.plates);
        otherPlates.forEach((plate) => plate.updateProps({ state: 'default', directions: [] }));
        this._selectionData.plates.forEach((plate) =>
          plate.updateProps({ state: this._selectionData.state }),
        );
      }
    } else {
      const otherPlates = difference(this.plates, this._selectionData.plates);
      otherPlates.forEach((plate) => plate.updateProps({ state: 'default', directions: [] }));
      this._selectionData.plates.forEach((plate) =>
        plate.updateProps({ state: this._selectionData.state }),
      );
    }

    if (this._selectionData.hasDirections) {
      this._selectionData.plates.forEach((plate, i) => {
        const directions: PlateDirection[] = [];
        const prevPlate: Plate | undefined = this._selectionData.plates[i - 1];
        const nextPlate: Plate | undefined = this._selectionData.plates[i + 1];

        if (prevPlate && plate.x - prevPlate.x > 0) directions.push('left');
        else if (prevPlate && plate.y - prevPlate.y > 0) directions.push('top');
        else if (prevPlate && plate.x - prevPlate.x < 0) directions.push('right');
        else if (prevPlate && plate.y - prevPlate.y < 0) directions.push('bottom');

        if (nextPlate && plate.x - nextPlate.x > 0) directions.push('left');
        else if (nextPlate && plate.y - nextPlate.y > 0) directions.push('top');
        else if (nextPlate && plate.x - nextPlate.x < 0) directions.push('right');
        else if (nextPlate && plate.y - nextPlate.y < 0) directions.push('bottom');

        plate.setProp('directions', directions);
      });
    }
  }

  protected _setPlateStateByPoint(point: Point, state: PlateState, directions: PlateDirection[]) {
    const plate = findSafe(this.plates, (plate) => plate.x === point.x && plate.y === point.y);
    plate.setProp('state', state);
    plate.setProp('directions', directions);
  }

  protected async _hidePlateByPoint(point: Point) {
    const plate = findSafe(this.plates, (plate) => plate.x === point.x && plate.y === point.y);
    await animateOpacity({ element: plate, fromOpacity: 1, toOpacity: 0 });
  }

  protected _writeSelectedWord(word: Nullable<string>) {
    this.taskText.updateStyle({ opacity: 0 });
    this.selectedWord.updateStyle({ opacity: '', display: '', backgroundColor: '', color: '' });
    this.selectedWord.setProp('word', word);
  }

  protected _eraseSelectedWord() {
    this.taskText.updateStyle({ opacity: '' });
    this.selectedWord.setProp('word', null);
  }

  protected async _successSelectedWord() {
    this.selectedWord.updateStyle({ backgroundColor: '#8ACB00', color: '#FFFFFF' });
    this.selectedWord.setProp('isCloseButtonMounted', false);
  }

  protected async _moveSelectedWordToTaskBlock() {
    const wordTaskIndex = this.data.findIndex(
      (taskData) => taskData.word === this.selectedWord.props.word,
    );
    const taskBlock = this.taskBlocks[wordTaskIndex];

    if (!taskBlock.cells.refElement || !this.selectedWord.refElement) return;

    const cellsElementRect = taskBlock.cells.refElement.getBoundingClientRect();
    const selectedWordElementRect = this.selectedWord.refElement.getBoundingClientRect();
    const x =
      cellsElementRect.x +
      cellsElementRect.width / 2 -
      (selectedWordElementRect.x + selectedWordElementRect?.width / 2);
    const y = cellsElementRect.y - selectedWordElementRect.y - cellsElementRect.height / 2;
    const currentStyle = { transform: `translateX(-50%) translate(0px, 0px)`, opacity: 1 };

    await anime({
      targets: currentStyle,
      transform: `translateX(-50%) translate(${x}px, ${y}px)`,
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad',
      update: () => this.selectedWord.updateStyle(currentStyle),
    }).finished;

    this.selectedWord.updateStyle({ transform: '' });
  }

  protected async _hideSelectedWord() {
    await animateOpacity({ element: this.selectedWord, fromOpacity: 1, toOpacity: 0 });
  }

  protected _checkIfSelectedWordExists() {
    return this.options.tasks.find((task) => task.word === this.selectedWord.props.word);
  }

  protected async _hideTaskBlockCellsByTaskBlockIndex(taskBlockIndex: number) {
    const taskBlock = this.taskBlocks[taskBlockIndex];
    await animateOpacity({ element: taskBlock.cells, fromOpacity: 1, toOpacity: 0 });
  }

  protected async _showTaskBlockWordByTaskBlockIndex(taskBlockIndex: number) {
    const taskBlock = this.taskBlocks[taskBlockIndex];
    await animateOpacity({ element: taskBlock.word, fromOpacity: 0, toOpacity: 1 });
  }

  protected async _toggleTaskBlockByTaskBlockIndex(taskBlockIndex: number) {
    await Promise.all([
      this._hideTaskBlockCellsByTaskBlockIndex(taskBlockIndex),
      this._showTaskBlockWordByTaskBlockIndex(taskBlockIndex),
    ]);
  }

  protected _checkIfAllWordsResolved() {
    return this.data.every((item) => item.isResolved);
  }

  protected async _showTaskText() {
    await animateOpacity({ element: this.taskText, fromOpacity: 0, toOpacity: 1 });
  }

  protected _getNearPlates(plate: Plate) {
    return compact([
      this.plates.find((p) => p.x === plate.x + 1 && p.y === plate.y),
      this.plates.find((p) => p.x === plate.x - 1 && p.y === plate.y),
      this.plates.find((p) => p.x === plate.x && p.y === plate.y + 1),
      this.plates.find((p) => p.x === plate.x && p.y === plate.y - 1),
    ]);
  }

  protected async _runSuccessCheckMarkAndNextButton() {
    this.successText.setProps({ children: 'Выполнено!', style: { opacity: 0 } });
    this.successCheckMark.updateStyle({ display: '', opacity: 0 });
    this.nextButton.updateStyle({ display: '', opacity: 0 });

    await Promise.all([
      animateOpacity({ element: this.successText, fromOpacity: 0, toOpacity: 1 }),
      animateOpacity({ element: this.successCheckMark, fromOpacity: 0, toOpacity: 1 }),
      animateOpacity({ element: this.nextButton, fromOpacity: 0, toOpacity: 1 }),
    ]);

    await new Promise((resolve) => this.nextButton.setProp('onClick', resolve));
  }
}

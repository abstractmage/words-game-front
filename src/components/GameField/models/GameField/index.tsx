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
  public readonly headerTitle = new ElementModel<HTMLDivElement>({
    props: {
      children: (
        <>
          Уровень 1<br /> <big>Найди названия</big>
        </>
      ),
    },
  });

  public readonly taskBlocks: {
    image: ElementModel<HTMLDivElement>;
    cells: ElementModel<HTMLDivElement>;
    word: ElementModel<HTMLDivElement>;
  }[];

  public readonly taskText = new ElementModel<HTMLDivElement>({
    props: { children: 'Выбери первую букву слова' },
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

  public constructor(public readonly options: Options) {
    super(options);
    this.taskBlocks = options.tasks.map((taskData) => ({
      image: new ElementModel({
        props: { style: { backgroundImage: `url(${taskData.imageSrc})` } },
      }),
      cells: new ElementModel(),
      word: new ElementModel({
        props: { style: { opacity: 0 }, children: taskData.word },
      }),
    }));
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
                  props: { state: 'default', directions: [], isActive: false },
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

    while (!this._checkIfAllWordsResolved()) {
      let selectedPlates: Plate[] = [];

      while (!this._checkIfSelectedWordExists()) {
        let activePlates: Plate[] = [];

        if (selectedPlates.length) {
          const lastSelectedPlate = selectedPlates[selectedPlates.length - 1];
          activePlates = uniq([
            ...selectedPlates,
            ...this._getNearPlates(lastSelectedPlate).filter(
              (plate) => plate.props.style?.opacity !== 0,
            ),
          ]);
        } else {
          activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);
        }

        activePlates.forEach((plate) => plate.setProp('isActive', true));

        this.selectedWord.setProp('isCloseButtonActive', true);
        const clickedItem = await Promise.race([
          ...activePlates.map(
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

        if (clickedItem instanceof Plate) {
          const clickedPlate = clickedItem;

          if (clickedPlate.props.state === 'default') {
            clickedPlate.setProp('state', 'selected');
            selectedPlates = [...selectedPlates, clickedPlate];
          } else {
            const clickedPlateQueueIndex = selectedPlates.indexOf(clickedPlate);
            const resettingPlates = selectedPlates.slice(
              clickedPlateQueueIndex,
              selectedPlates.length,
            );
            resettingPlates.forEach((plate) => plate.setProp('state', 'default'));
            selectedPlates = difference(selectedPlates, resettingPlates);
          }

          if (selectedPlates.length) {
            this._writeSelectedWord(selectedPlates.map((plate) => plate.props.children).join(''));
          } else {
            this._eraseSelectedWord();
          }
        } else {
          selectedPlates.forEach((plate) => plate.setProp('state', 'default'));
          this._eraseSelectedWord();
          selectedPlates = [];
        }
      }

      const word = selectedPlates.map((plate) => plate.letter).join('');
      const wordTaskIndex = this.data.findIndex((taskData) => taskData.word === word);

      this.data[wordTaskIndex].isResolved = true;
      selectedPlates.forEach((plate) => plate.setProp('state', 'success'));
      this._resolveSelectedWord();
      await wait(500);
      await Promise.all([
        ...selectedPlates.map((plate) => this._hidePlateByPoint(plate)),
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

    while (!this._checkIfAllWordsResolved()) {
      let selectedPlates: Plate[] = [];
      const activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);

      activePlates.forEach((plate) => plate.setProp('isActive', true));

      const pressedPlate = await Promise.race(
        activePlates.map(
          (plate) =>
            new Promise<Plate>((resolve) => plate.setProp('onMouseDown', () => resolve(plate))),
        ),
      );

      selectedPlates.push(pressedPlate);
      pressedPlate.setProp('state', 'pressed');
      this._writeSelectedWord(selectedPlates.map((plate) => plate.props.children).join(''));

      activePlates.forEach((plate) => {
        plate.setProp('onMouseEnter', () => {
          if (selectedPlates.includes(plate)) {
            const currentSelectedPlateIndex = selectedPlates.indexOf(plate);
            selectedPlates = selectedPlates.slice(0, currentSelectedPlateIndex + 1);
          } else {
            const lastSelectedPlate = selectedPlates[selectedPlates.length - 1];
            const nearPlates = this._getNearPlates(lastSelectedPlate);

            if (nearPlates.includes(plate)) {
              selectedPlates.push(plate);
            }
          }

          this.plates.forEach((plate) => {
            plate.updateProps({ state: 'default', directions: [] });
          });

          selectedPlates.forEach((plate, i) => {
            const directions: PlateDirection[] = [];
            const prevPlate: Plate | undefined = selectedPlates[i - 1];
            const nextPlate: Plate | undefined = selectedPlates[i + 1];

            if (prevPlate && plate.x - prevPlate.x > 0) directions.push('left');
            else if (prevPlate && plate.y - prevPlate.y > 0) directions.push('top');
            else if (prevPlate && plate.x - prevPlate.x < 0) directions.push('right');
            else if (prevPlate && plate.y - prevPlate.y < 0) directions.push('bottom');

            if (nextPlate && plate.x - nextPlate.x > 0) directions.push('left');
            else if (nextPlate && plate.y - nextPlate.y > 0) directions.push('top');
            else if (nextPlate && plate.x - nextPlate.x < 0) directions.push('right');
            else if (nextPlate && plate.y - nextPlate.y < 0) directions.push('bottom');

            plate.updateProps({ state: 'pressed', directions });
          });

          this._writeSelectedWord(selectedPlates.map((plate) => plate.props.children).join(''));
        });
      });

      await new Promise<void>((resolve) => {
        document.body.onmouseup = () => resolve();
        document.body.onkeyup = (e) => e.key === 'Escape' && resolve();
      });
      activePlates.forEach((plate) => plate.setProp('onMouseEnter', undefined));

      if (this._checkIfSelectedWordExists()) {
        const wordTaskIndex = this.data.findIndex(
          (taskData) => taskData.word === this.selectedWord.props.word,
        );

        this.data[wordTaskIndex].isResolved = true;
        selectedPlates.forEach((plate) =>
          plate.updateProps({ state: 'pressedSuccess', isActive: false }),
        );
        this._resolveSelectedWord();
        await wait(500);
        await Promise.all([
          ...selectedPlates.map((plate) =>
            animateOpacity({ element: plate, fromOpacity: 1, toOpacity: 0 }),
          ),
          this._toggleTaskBlockByTaskBlockIndex(wordTaskIndex),
          !this._checkIfAllWordsResolved() && this._showTaskText(),
        ]);
      } else {
        selectedPlates.forEach((plate) => plate.setProp('state', 'pressedError'));
        this.selectedWord.updateStyle({ backgroundColor: '#FF0000', color: '#FFFFFF' });
        await wait(1000);
        selectedPlates.forEach((plate) => plate.updateProps({ state: 'default', directions: [] }));
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
      }

      activePlates.forEach((plate) => plate.setProp('isActive', false));
    }

    await this._runSuccessCheckMarkAndNextButton();
  }

  public async runWithSelectionByClickAndDrag() {
    this.selectedWord.setProp('isCloseButtonMounted', false);

    while (!this._checkIfAllWordsResolved()) {
      let selectedPlates: Plate[] = [];
      const activePlates = this.plates.filter((plate) => plate.props.style?.opacity !== 0);

      activePlates.forEach((plate) => plate.setProp('isActive', true));

      const pressedPlate = await Promise.race(
        activePlates.map(
          (plate) =>
            new Promise<Plate>((resolve) => plate.setProp('onClick', () => resolve(plate))),
        ),
      );

      selectedPlates.push(pressedPlate);
      pressedPlate.setProp('state', 'pressed');
      this._writeSelectedWord(selectedPlates.map((plate) => plate.props.children).join(''));
      await wait(10);

      await new Promise<void>((resolve) => {
        document.body.onclick = () => resolve();
        document.body.onkeyup = (e) => e.key === 'Escape' && resolve();

        activePlates.forEach((plate) => {
          plate.setProp('onMouseEnter', () => {
            if (selectedPlates.includes(plate)) {
              const currentSelectedPlateIndex = selectedPlates.indexOf(plate);
              selectedPlates = selectedPlates.slice(0, currentSelectedPlateIndex + 1);
            } else {
              const lastSelectedPlate = selectedPlates[selectedPlates.length - 1];
              const nearPlates = this._getNearPlates(lastSelectedPlate);

              if (nearPlates.includes(plate)) {
                selectedPlates.push(plate);
              }
            }

            this.plates.forEach((plate) => {
              plate.updateProps({ state: 'default', directions: [] });
            });

            selectedPlates.forEach((plate, i) => {
              const directions: PlateDirection[] = [];
              const prevPlate: Plate | undefined = selectedPlates[i - 1];
              const nextPlate: Plate | undefined = selectedPlates[i + 1];

              if (prevPlate && plate.x - prevPlate.x > 0) directions.push('left');
              else if (prevPlate && plate.y - prevPlate.y > 0) directions.push('top');
              else if (prevPlate && plate.x - prevPlate.x < 0) directions.push('right');
              else if (prevPlate && plate.y - prevPlate.y < 0) directions.push('bottom');

              if (nextPlate && plate.x - nextPlate.x > 0) directions.push('left');
              else if (nextPlate && plate.y - nextPlate.y > 0) directions.push('top');
              else if (nextPlate && plate.x - nextPlate.x < 0) directions.push('right');
              else if (nextPlate && plate.y - nextPlate.y < 0) directions.push('bottom');

              plate.updateProps({ state: 'pressed', directions });
            });

            this._writeSelectedWord(selectedPlates.map((plate) => plate.props.children).join(''));

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
        selectedPlates.forEach((plate) =>
          plate.updateProps({ state: 'pressedSuccess', isActive: false }),
        );
        this._resolveSelectedWord();
        await wait(500);
        await Promise.all([
          ...selectedPlates.map((plate) =>
            animateOpacity({ element: plate, fromOpacity: 1, toOpacity: 0 }),
          ),
          this._toggleTaskBlockByTaskBlockIndex(wordTaskIndex),
          !this._checkIfAllWordsResolved() && this._showTaskText(),
        ]);
      } else {
        selectedPlates.forEach((plate) => plate.setProp('state', 'pressedError'));
        this.selectedWord.updateStyle({ backgroundColor: '#FF0000', color: '#FFFFFF' });
        await wait(1000);
        selectedPlates.forEach((plate) => plate.updateProps({ state: 'default', directions: [] }));
        await Promise.all([this._hideSelectedWord(), this._showTaskText()]);
        this.selectedWord.updateStyle({ opacity: 0 });
      }

      activePlates.forEach((plate) => plate.setProp('isActive', false));
    }

    await this._runSuccessCheckMarkAndNextButton();
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
    this.taskText.updateStyle({});
    this.selectedWord.setProp('word', null);
  }

  protected async _resolveSelectedWord() {
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

    this.selectedWord.updateStyle({ backgroundColor: '#8ACB00', color: '#FFFFFF' });
    this.selectedWord.setProp('isCloseButtonMounted', false);

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
    this.taskText.setProps({ children: 'Выполнено!', style: { opacity: 0 } });
    this.successCheckMark.updateStyle({ display: '', opacity: 0 });
    this.nextButton.updateStyle({ display: '', opacity: 0 });

    await Promise.all([
      animateOpacity({ element: this.taskText, fromOpacity: 0, toOpacity: 1 }),
      animateOpacity({ element: this.successCheckMark, fromOpacity: 0, toOpacity: 1 }),
      animateOpacity({ element: this.nextButton, fromOpacity: 0, toOpacity: 1 }),
    ]);

    await new Promise((resolve) => this.nextButton.setProp('onClick', resolve));
  }
}

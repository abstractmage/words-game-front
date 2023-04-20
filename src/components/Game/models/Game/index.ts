import { GameField } from 'src/components/GameField/models/GameField';
import { animateOpacity } from 'src/shared/animateOpacity';
import { ElementModel } from 'src/shared/ElementModel';
import { Options } from './types';

export class Game extends ElementModel<HTMLDivElement> {
  public readonly backButton = new ElementModel<HTMLDivElement>();

  public readonly hintButton = new ElementModel<HTMLDivElement>();

  public readonly gameFields: GameField[];

  public constructor(options: Options) {
    super(options);
    this.gameFields = options.gameFields.map(
      (gameFieldOptions) =>
        new GameField({
          ...gameFieldOptions,
          props: {
            ...gameFieldOptions.props,
            style: { ...gameFieldOptions.props?.style, display: 'none', opacity: 0 },
          },
        }),
    );
  }

  public async runWithSelectionByClick() {
    for (const gameField of this.gameFields) {
      gameField.updateStyle({ display: '', opacity: 0 });
      await animateOpacity({ element: gameField, fromOpacity: 0, toOpacity: 1 });
      await gameField.runWithSelectionByClick();
      await animateOpacity({ element: gameField, fromOpacity: 1, toOpacity: 0 });
      gameField.updateStyle({ display: 'none', opacity: 0 });
    }
  }

  public async runWithSelectionByPressAndDrag() {
    for (const gameField of this.gameFields) {
      gameField.updateStyle({ display: '', opacity: 0 });
      await animateOpacity({ element: gameField, fromOpacity: 0, toOpacity: 1 });
      await gameField.runWithSelectionByPressAndDrag();
      await animateOpacity({ element: gameField, fromOpacity: 1, toOpacity: 0 });
      gameField.updateStyle({ display: 'none', opacity: 0 });
    }
  }

  public async runWithSelectionByClickAndDrag() {
    for (const gameField of this.gameFields) {
      gameField.updateStyle({ display: '', opacity: 0 });
      await animateOpacity({ element: gameField, fromOpacity: 0, toOpacity: 1 });
      await gameField.runWithSelectionByClickAndDrag();
      await animateOpacity({ element: gameField, fromOpacity: 1, toOpacity: 0 });
      gameField.updateStyle({ display: 'none', opacity: 0 });
    }
  }
}

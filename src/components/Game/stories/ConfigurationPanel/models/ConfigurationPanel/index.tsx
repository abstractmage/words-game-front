import { uniqueId } from 'lodash';
import { action, computed, makeObservable, observable } from 'mobx';
import { getScaledValue } from 'src/components/Game/styles';
import { ElementModel } from 'src/shared/ElementModel';
import { GameFieldInput, TaskInput } from './types';

export class ConfigurationPanel {
  public readonly addGameFieldInputButton = new ElementModel<HTMLButtonElement>();

  public readonly colorInput = new ElementModel<HTMLInputElement>();

  public readonly outputButton = new ElementModel<HTMLButtonElement>();

  @observable
  protected _gameFieldInputs: GameFieldInput[] = [];

  public constructor() {
    makeObservable(this);
    this.addGameFieldInputButton.setProp('onClick', () => this._pushGameFieldInput());
    this.outputButton.setProp('onClick', async () => {
      const json = await this._getJson();
      navigator.clipboard.writeText(json);
    });
  }

  @computed
  public get gameFieldInputs() {
    return this._gameFieldInputs;
  }

  @action.bound
  protected _pushGameFieldInput() {
    const index =
      this._gameFieldInputs.push({
        id: uniqueId(),
        removeButton: new ElementModel(),
        levelNameInput: new ElementModel(),
        addTaskInputButton: new ElementModel(),
        taskInputs: [],
        taskTextInput: new ElementModel(),
        fieldInput: new ElementModel(),
        fieldWidthInput: new ElementModel(),
        fieldHeightInput: new ElementModel(),
      }) - 1;
    const gameFieldInput = this._gameFieldInputs[index];

    gameFieldInput.removeButton.setProp('onClick', () =>
      this._removeGameFieldInput(gameFieldInput),
    );
    gameFieldInput.addTaskInputButton.setProp('onClick', () => this._pushTaskInput(gameFieldInput));
  }

  @action.bound
  protected _removeGameFieldInput(gameFieldInput: GameFieldInput) {
    this._gameFieldInputs = this._gameFieldInputs.filter((g) => g !== gameFieldInput);
  }

  @action.bound
  protected _pushTaskInput(gameFieldInput: GameFieldInput) {
    const index =
      gameFieldInput.taskInputs.push({
        id: uniqueId(),
        removeButton: new ElementModel(),
        wordInput: new ElementModel(),
        imageInput: new ElementModel(),
        expectedCellsInput: new ElementModel(),
      }) - 1;
    const taskInput = gameFieldInput.taskInputs[index];

    taskInput.removeButton.setProp('onClick', () =>
      this._removeTaskInputByGameFieldInputIndexAndTaskInputIndex(gameFieldInput, taskInput),
    );
  }

  @action.bound
  protected _removeTaskInputByGameFieldInputIndexAndTaskInputIndex(
    gameFieldInput: GameFieldInput,
    taskInput: TaskInput,
  ) {
    gameFieldInput.taskInputs = gameFieldInput.taskInputs.filter((t) => t !== taskInput);
  }

  protected async _getJson() {
    return JSON.stringify({
      props: { backgroundColor: this.colorInput.refElement?.value },
      gameFields: await Promise.all(
        this._gameFieldInputs.map(async (gameFieldInput, i) => ({
          headerTitle: {
            text: `Уровень ${i + 1}<br /> <big>${
              gameFieldInput.levelNameInput.refElement?.value
            }</big>`,
          },
          tasks: await Promise.all(
            gameFieldInput.taskInputs.map(async (taskInput) => ({
              word: taskInput.wordInput.refElement?.value.toUpperCase(),
              imageSrc: await this._convertBase64(taskInput.imageInput.refElement!.files![0]),
              expectedCells: taskInput.expectedCellsInput.refElement?.value
                .split(' ')
                .map((cellValue) => {
                  const [firstPart, secondPart] = cellValue.split(',');

                  return {
                    x: Number(firstPart.match(/\d+/)![0]),
                    y: Number(secondPart.match(/\d+/)![0]),
                  };
                }),
            })),
          ),
          taskText: { text: gameFieldInput.taskTextInput.refElement?.value },
          plates: gameFieldInput.fieldInput.refElement?.value
            .trim()
            .split('\n')
            .map((rowValue) =>
              rowValue.split('').map((value) => (value === '_' ? ' ' : value.toUpperCase())),
            ),
          field: {
            props: {
              style: {
                width: gameFieldInput.fieldWidthInput.refElement?.value
                  ? getScaledValue(`${gameFieldInput.fieldWidthInput.refElement?.value}`)
                  : '',
                height: gameFieldInput.fieldHeightInput.refElement?.value
                  ? getScaledValue(`${gameFieldInput.fieldHeightInput.refElement?.value}`)
                  : '',
              },
            },
          },
        })),
      ),
    });
  }

  protected async _convertBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = (error) => reject(error);
    });
  }
}

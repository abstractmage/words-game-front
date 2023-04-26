import { ElementModel } from 'src/shared/ElementModel';

export type TaskInput = {
  id: string;
  wordInput: ElementModel<HTMLInputElement>;
  imageInput: ElementModel<HTMLInputElement>;
  expectedCellsInput: ElementModel<HTMLInputElement>;
  removeButton: ElementModel<HTMLButtonElement>;
};

export type GameFieldInput = {
  id: string;
  removeButton: ElementModel<HTMLButtonElement>;
  levelNameInput: ElementModel<HTMLInputElement>;
  addTaskInputButton: ElementModel<HTMLButtonElement>;
  taskInputs: TaskInput[];
  taskTextInput: ElementModel<HTMLInputElement>;
  fieldInput: ElementModel<HTMLTextAreaElement>;
  fieldWidthInput: ElementModel<HTMLInputElement>;
  fieldHeightInput: ElementModel<HTMLInputElement>;
};

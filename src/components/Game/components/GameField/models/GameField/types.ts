import { Options as ElementModelOptions } from 'src/shared/ElementModel/types';

export type Options = ElementModelOptions<React.HTMLAttributes<HTMLDivElement>> & {
  headerTitle:
    | ElementModelOptions<React.HTMLAttributes<HTMLDivElement>>
    | { text: React.ReactNode };
  tasksBlockElement?: ElementModelOptions<React.HTMLAttributes<HTMLDivElement>>;
  tasks: {
    imageSrc: string;
    word: string;
    expectedCells: { x: number; y: number }[];
  }[];
  taskText: ElementModelOptions<React.HTMLAttributes<HTMLDivElement>> | { text: React.ReactNode };
  field?: ElementModelOptions<React.HTMLAttributes<HTMLDivElement>>;
  plates: string[][];
};

export type Data = {
  word: string;
  isResolved: boolean;
  expectedCells: { x: number; y: number }[];
}[];

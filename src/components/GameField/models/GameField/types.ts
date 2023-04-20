import { Options as ElementModelOptions } from 'src/shared/BaseModel/types';

export type Options = ElementModelOptions<React.HTMLAttributes<HTMLDivElement>> & {
  tasks: {
    imageSrc: string;
    word: string;
    expectedCells: { x: number; y: number }[];
  }[];
  field?: ElementModelOptions<React.HTMLAttributes<HTMLDivElement>>;
  plates: string[][];
};

export type Data = {
  word: string;
  isResolved: boolean;
  expectedCells: { x: number; y: number }[];
}[];

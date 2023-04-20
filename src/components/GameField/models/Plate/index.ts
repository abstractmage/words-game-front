import { ElementModel } from 'src/shared/ElementModel';
import { Props as PlateProps } from '../../components/Plate/types';
import { Options } from './types';

export class Plate extends ElementModel<HTMLElement, PlateProps> {
  public readonly x: number;

  public readonly y: number;

  public readonly letter: string;

  public constructor(options: Options) {
    super(options);
    this.x = options.x;
    this.y = options.y;
    this.letter = options.letter;
    this.setProp('children', this.letter);
  }
}

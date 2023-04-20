import { Options as ElementModelOptions } from 'src/shared/BaseModel/types';
import { Props as PlateProps } from '../../components/Plate/types';

export type Options = ElementModelOptions<PlateProps> & {
  x: number;
  y: number;
  letter: string;
};

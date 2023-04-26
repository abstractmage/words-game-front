import { Options as ElementModelOptions } from 'src/shared/ElementModel/types';
import { Options as GameFieldOptions } from '../../components/GameField/models/GameField/types';

export type Options = ElementModelOptions<React.HTMLAttributes<HTMLDivElement>> & {
  gameFields: GameFieldOptions[];
};

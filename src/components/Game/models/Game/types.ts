import { Options as ElementModelOptions } from 'src/shared/BaseModel/types';
import { Options as GameFieldOptions } from '../../../GameField/models/GameField/types';

export type Options = ElementModelOptions<React.HTMLAttributes<HTMLDivElement>> & {
  gameFields: GameFieldOptions[];
};

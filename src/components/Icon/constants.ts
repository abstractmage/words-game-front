import { ReactComponent as BulbSprite } from './images/bulb.svg';
import { ReactComponent as LeftCaretSprite } from './images/leftCaret.svg';
import { ReactComponent as RightCaretSprite } from './images/rightCaret.svg';
import { Type } from './types';

export const sprites: Record<Type, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  leftCaret: LeftCaretSprite,
  rightCaret: RightCaretSprite,
  bulb: BulbSprite,
};

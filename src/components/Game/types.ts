import { Game } from './models/Game';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  model: Game;
};

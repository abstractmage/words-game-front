import { Meta, StoryFn } from '@storybook/react';
import { fullScreenStyle } from 'src/constants/styles';
import { Game as GameComp } from '../..';
import { Game as GameModel } from '../../models/Game';
import { gameOptions } from './constants';

export const GameWithSelectionByClickAndDrag: StoryFn = () => {
  const game = new GameModel(gameOptions);
  console.log(game);
  game.runWithSelectionByClickAndDrag();
  return <GameComp style={fullScreenStyle} model={game} />;
};

export default {
  title: 'Game/GameWithSelectionByClickAndDrag',
} as Meta;

import { Meta, StoryFn } from '@storybook/react';
import { fullScreenStyle } from 'src/constants/styles';
import { Game as GameComp } from '../..';
import { Game as GameModel } from '../../models/Game';
import { gameOptions } from './constants';

export const GameWithSelectionByClick: StoryFn = () => {
  const game = new GameModel(gameOptions);
  console.log(game);
  game.runWithSelectionByClick();
  return <GameComp style={fullScreenStyle} model={game} />;
};

export default {
  title: 'Game/GameWithSelectionByClick',
} as Meta;

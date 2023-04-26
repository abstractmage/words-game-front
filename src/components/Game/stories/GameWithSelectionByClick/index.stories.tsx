import { Meta, StoryFn } from '@storybook/react';
import { fullScreenStyle } from 'src/constants/styles';
import { Game as GameComp } from '../..';
import { Game as GameModel } from '../../models/Game';
import { gameOptions } from './constants';

export const GameWithSelectionByClick: StoryFn<{ options: string }> = (props) => {
  const { options } = props;
  const game = new GameModel(JSON.parse(options));
  console.log(game);
  game.runWithSelectionByClick();
  return <GameComp style={fullScreenStyle} model={game} />;
};

GameWithSelectionByClick.args = {
  options: JSON.stringify(gameOptions),
};

export default {
  title: 'Game/GameWithSelectionByClick',
} as Meta;

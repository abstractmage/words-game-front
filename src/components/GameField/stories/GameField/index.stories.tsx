import { Meta, StoryFn } from '@storybook/react';
import { fullScreenStyle } from 'src/constants/styles';
import { GameField as GameFieldComp } from '../..';
import { GameField as GameFieldModel } from '../../models/GameField';
import ballImage from './images/ball.svg';
import catImage from './images/cat.svg';
import earImage from './images/ear.svg';

export const GameField: StoryFn = () => {
  const gameField = new GameFieldModel({
    tasks: [
      {
        imageSrc: catImage,
        word: 'КОТ',
        expectedCells: [
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
        ],
      },
      {
        imageSrc: ballImage,
        word: 'МЯЧ',
        expectedCells: [
          { x: 1, y: 2 },
          { x: 2, y: 2 },
          { x: 3, y: 2 },
        ],
      },
      {
        imageSrc: earImage,
        word: 'УХО',
        expectedCells: [
          { x: 0, y: 3 },
          { x: 1, y: 3 },
          { x: 1, y: 4 },
        ],
      },
    ],
    plates: [
      [' ', 'Т', ' ', ' '],
      ['К', 'О', ' ', ' '],
      [' ', 'М', 'Я', 'Ч'],
      ['У', 'Х', ' ', ' '],
      [' ', 'О', ' ', ' '],
    ],
  });

  console.log(gameField);

  return (
    <div style={fullScreenStyle}>
      <GameFieldComp model={gameField} />
    </div>
  );
};

export default {
  title: 'Game/GameField',
} as Meta;

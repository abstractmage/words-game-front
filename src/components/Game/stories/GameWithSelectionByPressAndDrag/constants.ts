import { Options } from '../../models/Game/types';
import { getScaledValue } from '../../styles';
import backgroundImage2 from '../images/background2.svg';
import ballImage from '../images/ball.svg';
import bugImage from '../images/bug.svg';
import flyImage from '../images/fly.svg';
import handImage from '../images/hand.svg';
import headImage from '../images/head.svg';
import legImage from '../images/leg.svg';
import owlImage from '../images/owl.svg';
import rabbitImage from '../images/rabbit.svg';
import snailImage from '../images/snail.svg';
import spiderImage from '../images/spider.svg';
import waspImage from '../images/wasp.svg';
import wolfImage from '../images/wolf.svg';

export const gameOptions: Options = {
  props: {
    style: {
      backgroundImage: `url(${backgroundImage2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
  gameFields: [
    {
      headerTitle: {
        text: 'Уровень 1<br /> <big>Игрушка</big>',
      },
      tasks: [
        {
          word: 'МЯЧ',
          imageSrc: ballImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
          ],
        },
      ],
      taskText: {
        text: `Нажми на букву слова и веди
      курсором по остальным`,
      },
      plates: [['М', 'Я', 'Ч']],
      field: {
        props: { style: { height: getScaledValue('370px') } },
      },
    },
    {
      headerTitle: {
        text: 'Уровень 2<br /> <big>Они летают</big>',
      },
      tasks: [
        {
          word: 'ОСА',
          imageSrc: waspImage,
          expectedCells: [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
          ],
        },
        {
          word: 'МУХА',
          imageSrc: flyImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
          ],
        },
      ],
      taskText: {
        text: `Нажми на букву слова и веди
      курсором по остальным`,
      },
      plates: [
        ['М', 'У', 'Х', 'А'],
        [' ', 'О', ' ', ' '],
        [' ', 'С', ' ', ' '],
        [' ', 'А', ' ', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 3<br /> <big>Живут в лесу</big>',
      },
      tasks: [
        {
          word: 'ЗАЯЦ',
          imageSrc: rabbitImage,
          expectedCells: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
          ],
        },
        {
          word: 'ВОЛК',
          imageSrc: wolfImage,
          expectedCells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
          ],
        },
        {
          word: 'СОВА',
          imageSrc: owlImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
          ],
        },
      ],
      taskText: {
        text: `Нажми на букву слова и веди
      курсором по остальным`,
      },
      plates: [
        ['С', ' ', 'В', ' '],
        ['О', ' ', 'О', ' '],
        ['В', ' ', 'Л', ' '],
        ['А', ' ', 'К', ' '],
        ['З', 'А', 'Я', 'Ц'],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 4<br /> <big>Малыши</big>',
      },
      tasks: [
        {
          word: 'ПАУК',
          imageSrc: spiderImage,
          expectedCells: [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
          ],
        },
        {
          word: 'УЛИТКА',
          imageSrc: snailImage,
          expectedCells: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
          ],
        },
        {
          word: 'ЖУК',
          imageSrc: bugImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
        },
      ],
      taskText: {
        text: `Нажми на букву слова и веди
      курсором по остальным`,
      },
      plates: [
        [' ', 'Ж', 'У', ' '],
        ['У', ' ', 'К', ' '],
        ['Л', 'П', 'А', ' '],
        ['И', ' ', 'У', 'К'],
        ['Т', 'К', 'А', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 5<br /> <big>Части тела</big>',
      },
      tasks: [
        {
          word: 'РУКА',
          imageSrc: handImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'НОГА',
          imageSrc: legImage,
          expectedCells: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
          ],
        },
        {
          word: 'ГОЛОВА',
          imageSrc: headImage,
          expectedCells: [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
          ],
        },
      ],
      taskText: {
        text: `Нажми на букву слова и веди
      курсором по остальным`,
      },
      plates: [
        [' ', 'Р', ' ', ' '],
        [' ', 'У', 'К', 'А'],
        ['Г', 'О', 'Л', 'О'],
        [' ', 'Г', 'А', 'В'],
        ['Н', 'О', ' ', 'А'],
      ],
      field: {},
    },
  ],
};

import { Options } from '../../models/Game/types';
import { getScaledValue } from '../../styles';
import catImage from '../images/cat.svg';

export const gameOptions: Options = {
  props: { style: { backgroundColor: '#EBE8D2' } },
  gameFields: [
    {
      headerTitle: {
        text: 'Уровень 1<br /> <big>Он рычит</big>',
      },
      tasks: [
        {
          word: 'ЛЕВ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
          ],
        },
      ],
      taskText: {
        text: `Выбери первую букву и веди
        курсор над остальными`,
      },
      plates: [['Л', 'Е', 'В']],
      field: {
        props: { style: { height: getScaledValue('370px') } },
      },
    },
    {
      headerTitle: {
        text: 'Уровень 2<br /> <big>Они плавают</big>',
      },
      tasks: [
        {
          word: 'РЫБА',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
          ],
        },
        {
          word: 'КИТ',
          imageSrc: catImage,
          expectedCells: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
          ],
        },
      ],
      taskText: {
        text: `Выбери первую букву и веди
        курсор над остальными`,
      },
      plates: [
        ['Р', 'Ы', 'Б', 'А'],
        [' ', ' ', 'К', ' '],
        [' ', ' ', 'И', ' '],
        [' ', ' ', 'Т', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 3<br /> <big>На голове</big>',
      },
      tasks: [
        {
          word: 'ГЛАЗ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
          ],
        },
        {
          word: 'ЯЗЫК',
          imageSrc: catImage,
          expectedCells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
          ],
        },
        {
          word: 'УСЫ',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
          ],
        },
      ],
      taskText: {
        text: `Выбери первую букву и веди
        курсор над остальными`,
      },
      plates: [
        [' ', ' ', 'Я', ' '],
        [' ', 'У', 'З', ' '],
        [' ', 'С', 'Ы', ' '],
        [' ', 'Ы', 'К', ' '],
        ['Г', 'Л', 'А', 'З'],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 4<br /> <big>Съедобное</big>',
      },
      tasks: [
        {
          word: 'АРБУЗ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
          ],
        },
        {
          word: 'ЛИМОН',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 2 },
            { x: 3, y: 1 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'ГРИБ',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
          ],
        },
      ],
      taskText: {
        text: `Выбери первую букву и веди
        курсор над остальными`,
      },
      plates: [
        [' ', 'Г', 'Р', ' '],
        [' ', ' ', 'И', 'Н'],
        ['А', ' ', 'Б', 'О'],
        ['Р', 'Л', 'И', 'М'],
        ['Б', 'У', 'З', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 5<br /> <big>На природе</big>',
      },
      tasks: [
        {
          word: 'ТРАВА',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
          ],
        },
        {
          word: 'РАДУГА',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
          ],
        },
        {
          word: 'РЕКА',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
          ],
        },
      ],
      taskText: {
        text: `Выбери первую букву и веди
        курсор над остальными`,
      },
      plates: [
        [' ', 'Р', 'А', ' '],
        ['Т', ' ', 'Д', 'У'],
        ['Р', 'А', ' ', 'Г'],
        ['Р', 'В', 'А', 'А'],
        ['Е', 'К', 'А', ' '],
      ],
      field: {},
    },
  ],
};

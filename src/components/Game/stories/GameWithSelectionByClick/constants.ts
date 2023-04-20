import ballImage from './images/ball.svg';
import catImage from './images/cat.svg';
import earImage from './images/ear.svg';

export const gameOptions = {
  gameFields: [
    {
      tasks: [
        {
          word: 'КИТ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
          ],
        },
      ],
      plates: [['К', 'И', 'Т']],
      field: {
        props: { style: { height: '370px' } },
      },
    },
    {
      tasks: [
        {
          word: 'КОТ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
          ],
        },
        {
          word: 'ПЁС',
          imageSrc: ballImage,
          expectedCells: [
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
          ],
        },
      ],
      plates: [
        ['К', 'О', 'Т', ' '],
        [' ', 'П', 'Ё', 'С'],
      ],
      field: {
        props: { style: { height: '370px' } },
      },
    },
    {
      tasks: [
        {
          word: 'НОС',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
          ],
        },
        {
          word: 'УХО',
          imageSrc: ballImage,
          expectedCells: [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
          ],
        },
        {
          word: 'РОТ',
          imageSrc: earImage,
          expectedCells: [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
          ],
        },
      ],
      plates: [
        [' ', 'Н', 'О', 'С'],
        ['У', 'Х', 'О', ' '],
        [' ', 'Р', 'О', 'Т'],
      ],
      field: {
        props: { style: { height: '450px' } },
      },
    },
    {
      tasks: [
        {
          word: 'ШАР',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
          ],
        },
        {
          word: 'СОК',
          imageSrc: ballImage,
          expectedCells: [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
          ],
        },
        {
          word: 'ТОРТ',
          imageSrc: earImage,
          expectedCells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
          ],
        },
      ],
      plates: [
        ['Ш', ' ', 'Т'],
        ['А', ' ', 'О'],
        ['Р', 'С', 'Р'],
        [' ', 'О', 'Т'],
        [' ', 'К', ' '],
      ],
      field: {
        props: { style: { width: '390px', height: '500px' } },
      },
    },
    {
      tasks: [
        {
          word: 'ГЛАЗ',
          imageSrc: catImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
        },
        {
          word: 'РУКА',
          imageSrc: ballImage,
          expectedCells: [
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
          ],
        },
        {
          word: 'НОГА',
          imageSrc: earImage,
          expectedCells: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 2, y: 3 },
          ],
        },
      ],
      plates: [
        ['Г', 'Л', 'А', ' '],
        [' ', ' ', 'З', ' '],
        ['Р', 'У', 'К', 'А'],
        [' ', ' ', 'А', ' '],
        ['Н', 'О', 'Г', ' '],
      ],
    },
    {
      tasks: [
        {
          word: 'ШКАФ',
          imageSrc: catImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'СТОЛ',
          imageSrc: ballImage,
          expectedCells: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
          ],
        },
        {
          word: 'СТУЛ',
          imageSrc: earImage,
          expectedCells: [
            { x: 1, y: 4 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
          ],
        },
      ],
      plates: [
        [' ', 'Ш', 'К', ' '],
        ['С', ' ', 'А', 'Ф'],
        ['Т', 'О', 'Л', ' '],
        [' ', 'Т', 'У', 'Л'],
        [' ', 'С', ' ', ' '],
      ],
    },
  ],
};

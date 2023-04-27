import { Options } from '../../models/Game/types';
import { getScaledValue } from '../../styles';
import cakeImage from '../images/cake.svg';
import catImage from '../images/cat.svg';
import clownImage from '../images/clown.svg';
import dogImage from '../images/dog.svg';
import earImage from '../images/ear.svg';
import juiceImage from '../images/juice.svg';
import mouthImage from '../images/mouth.svg';
import noseImage from '../images/nose.svg';
import stoolImage from '../images/stool.svg';
import tableImage from '../images/table.svg';
import wardrobeImage from '../images/wardrobe.svg';
import whaleImage from '../images/whale.svg';

export const gameOptions: Options = {
  props: { style: { backgroundColor: '#BCF7FF' } },
  gameFields: [
    {
      headerTitle: {
        text: 'Уровень 1<br /> <big>Пускает фонтан</big>',
      },
      tasks: [
        {
          word: 'КИТ',
          imageSrc: whaleImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
          ],
        },
      ],
      taskText: { text: 'Выбери первую букву' },
      plates: [['К', 'И', 'Т']],
      field: {
        props: { style: { height: getScaledValue('370px') } },
      },
    },
    {
      headerTitle: {
        text: 'Уровень 2<br /> <big>Домашние любимцы</big>',
      },
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
          imageSrc: dogImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
          ],
        },
      ],
      taskText: { text: 'Выбери первую букву' },
      plates: [
        ['К', 'О', 'Т'],
        [' ', 'П', ' '],
        [' ', 'Ё', ' '],
        [' ', 'С', ' '],
      ],
      field: {
        props: { style: { width: getScaledValue(370) } },
      },
    },
    {
      headerTitle: {
        text: 'Уровень 3<br /> <big>На лице</big>',
      },
      tasks: [
        {
          word: 'УХО',
          imageSrc: earImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
          ],
        },
        {
          word: 'РОТ',
          imageSrc: mouthImage,
          expectedCells: [
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'НОС',
          imageSrc: noseImage,
          expectedCells: [
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
          ],
        },
      ],
      taskText: { text: 'Выбери первую букву' },
      plates: [
        ['У', ' ', ' ', ' '],
        ['Х', 'Р', 'О', 'Т'],
        ['О', ' ', 'Н', ' '],
        [' ', ' ', 'О', ' '],
        [' ', ' ', 'С', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 4<br /> <big>На дне рождения</big>',
      },
      tasks: [
        {
          word: 'СОК',
          imageSrc: juiceImage,
          expectedCells: [
            { x: 0, y: 3 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
          ],
        },
        {
          word: 'ТОРТ',
          imageSrc: cakeImage,
          expectedCells: [
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 3, y: 2 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'КЛОУН',
          imageSrc: clownImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
          ],
        },
      ],
      taskText: { text: 'Выбери первую букву' },
      plates: [
        ['К', ' ', ' ', ' '],
        ['Л', 'О', ' ', 'Т'],
        [' ', 'У', 'Н', 'Р'],
        ['С', 'О', 'Т', 'О'],
        [' ', 'К', ' ', ' '],
      ],
      field: {},
    },
    {
      headerTitle: {
        text: 'Уровень 5<br /> <big>Мебель</big>',
      },
      tasks: [
        {
          word: 'ШКАФ',
          imageSrc: wardrobeImage,
          expectedCells: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
          ],
        },
        {
          word: 'СТОЛ',
          imageSrc: tableImage,
          expectedCells: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
          ],
        },
        {
          word: 'СТУЛ',
          imageSrc: stoolImage,
          expectedCells: [
            { x: 1, y: 4 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
          ],
        },
      ],
      taskText: { text: 'Выбери первую букву' },
      plates: [
        [' ', 'Ш', 'К', ' '],
        ['С', ' ', 'А', 'Ф'],
        ['Т', 'О', 'Л', ' '],
        [' ', 'Т', 'У', 'Л'],
        [' ', 'С', ' ', ' '],
      ],
      field: {},
    },
  ],
};

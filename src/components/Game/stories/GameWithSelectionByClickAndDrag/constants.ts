import { Options } from '../../models/Game/types';
import { getScaledValue } from '../../styles';
import backgroundImage3 from '../images/background3.svg';
import eyeImage from '../images/eye.svg';
import fishImage from '../images/fish.svg';
import grassImage from '../images/grass.svg';
import lemonImage from '../images/lemon.svg';
import lionImage from '../images/lion.svg';
import mushroomImage from '../images/mushroom.svg';
import mustacheImage from '../images/mustache.svg';
import rainbowImage from '../images/rainbow.svg';
import riverImage from '../images/river.svg';
import tongueImage from '../images/tongue.svg';
import watermelonImage from '../images/watermelon.svg';
import whaleImage from '../images/whale.svg';

export const gameOptions: Options = {
  props: {
    style: {
      backgroundImage: `url(${backgroundImage3})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
  gameFields: [
    {
      headerTitle: {
        text: 'Уровень 1<br /> <big>Он рычит</big>',
      },
      tasksBlockElement: {
        props: { style: { backgroundColor: 'rgb(228 114 0 / 15%)' } },
      },
      tasks: [
        {
          word: 'ЛЕВ',
          imageSrc: lionImage,
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
      tasksBlockElement: {
        props: { style: { backgroundColor: 'rgb(228 114 0 / 15%)' } },
      },
      tasks: [
        {
          word: 'РЫБА',
          imageSrc: fishImage,
          expectedCells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
          ],
        },
        {
          word: 'КИТ',
          imageSrc: whaleImage,
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
      tasksBlockElement: {
        props: { style: { backgroundColor: 'rgb(228 114 0 / 15%)' } },
      },
      tasks: [
        {
          word: 'ГЛАЗ',
          imageSrc: eyeImage,
          expectedCells: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
          ],
        },
        {
          word: 'ЯЗЫК',
          imageSrc: tongueImage,
          expectedCells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
          ],
        },
        {
          word: 'УСЫ',
          imageSrc: mustacheImage,
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
      tasksBlockElement: {
        props: { style: { backgroundColor: 'rgb(228 114 0 / 15%)' } },
      },
      tasks: [
        {
          word: 'АРБУЗ',
          imageSrc: watermelonImage,
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
          imageSrc: lemonImage,
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
          imageSrc: mushroomImage,
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
      tasksBlockElement: {
        props: { style: { backgroundColor: 'rgb(228 114 0 / 15%)' } },
      },
      tasks: [
        {
          word: 'ТРАВА',
          imageSrc: grassImage,
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
          imageSrc: rainbowImage,
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
          imageSrc: riverImage,
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

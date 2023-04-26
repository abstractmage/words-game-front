import { createUseStyles } from 'react-jss';

export const getScaledValue = (value: number | string) =>
  `calc(${parseFloat(value.toString())} * var(--scaling))`;

export const useStyles = createUseStyles({
  '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')`,

  main: {
    '--scaling': 'calc(100vh / 926)',
    width: '100%',
    height: '100%',
    backgroundColor: '#BCF7FF',
    fontFamily: 'Roboto',
    userSelect: 'none',

    '& .backButton': {
      position: 'absolute',
      left: getScaledValue('15px'),
      top: getScaledValue('30px'),
      width: getScaledValue('48px'),
      height: getScaledValue('48px'),
    },

    '& .hintButton': {
      position: 'absolute',
      right: getScaledValue('15px'),
      top: getScaledValue('30px'),
      width: getScaledValue('48px'),
      height: getScaledValue('48px'),
    },

    '& .congrat': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',

      '& .text': {
        position: 'absolute',
        left: '50%',
        top: getScaledValue('266px'),
        width: getScaledValue('400px'),
        height: getScaledValue('44px'),
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#293671',
        fontSize: getScaledValue('28px'),
        fontWeight: 700,
      },

      '& .button': {
        position: 'absolute',
        left: `calc(50% - ${getScaledValue('144px')})`,
        top: getScaledValue('425px'),
        width: getScaledValue('288px'),
        height: getScaledValue('92px'),
        fontSize: getScaledValue('24px'),
        fontWeight: '700',
      },
    },
  },
});

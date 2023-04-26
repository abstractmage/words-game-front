import { createUseStyles } from 'react-jss';
import { getScaledValue } from '../../styles';

export const useStyles = createUseStyles({
  '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')`,

  main: {
    position: 'relative',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    userSelect: 'none',

    '& .header': {
      position: 'absolute',
      left: getScaledValue('15px'),
      right: getScaledValue('15px'),
      top: getScaledValue('15px'),
      height: getScaledValue('80px'),
      display: 'flex',
      alignItems: 'center',
      fontWeight: 700,

      '& .title': {
        fontSize: getScaledValue('20px'),
        color: '#293671',
        lineHeight: 1.15,
        textAlign: 'center',
        flex: 1,
      },
    },

    '& .tasksBlock': {
      position: 'absolute',
      width: getScaledValue('400px'),
      left: '50%',
      top: getScaledValue('115px'),
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      borderRadius: getScaledValue('20px'),
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: getScaledValue('15px'),
      boxSizing: 'border-box',

      '& .taskBlock': {
        width: getScaledValue('110px'),
        height: getScaledValue('100px'),
        display: 'flex',
        flexDirection: 'column',

        '& .image': {
          flex: 1,
          marginBottom: getScaledValue('10px'),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        },

        '& .wordBlock': {
          position: 'relative',
          flexBasis: getScaledValue('20px'),
          textAlign: 'center',
          fontWeight: '700',
          fontSize: getScaledValue('24px'),
          lineHeight: '0.85',

          '& .word': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          },

          '& .cells': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'inline-flex',
            justifyContent: 'center',
            gap: getScaledValue('2px'),

            '& .cell': {
              width: getScaledValue('20px'),
              height: getScaledValue('20px'),
              backgroundColor: '#FFFFFF',
              borderRadius: getScaledValue('5px'),
            },
          },
        },
      },
    },

    '& .taskText, & .successText': {
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
      fontSize: getScaledValue('24px'),
      fontWeight: 700,
      textAlign: 'center',
    },

    '& .selectedWord': {
      position: 'absolute',
      left: '50%',
      top: getScaledValue('266px'),
      transform: 'translateX(-50%)',
      boxSizing: 'border-box',
      padding: `${getScaledValue('3px')} ${getScaledValue('9px')}`,
      backgroundColor: '#F4D584',
      borderRadius: getScaledValue('16px'),
      display: 'flex',
      alignItems: 'center',
      gap: getScaledValue('10px'),
      color: '#654900',

      '& .word': {
        fontSize: getScaledValue('32px'),
        fontWeight: 700,
      },

      '& .button': {
        display: 'flex',
        width: getScaledValue('35px'),
        height: getScaledValue('35px'),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: getScaledValue('20px'),
        fontWeight: 700,
        borderRadius: '100%',
        boxShadow: '0 2px 0 #000000',
        lineHeight: 1,
      },
    },

    '& .field': {
      position: 'absolute',
      left: '50%',
      top: getScaledValue('330px'),
      width: getScaledValue('400px'),
      height: getScaledValue('500px'),
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',

      '& .cell': {
        width: getScaledValue('99px'),
        height: getScaledValue('99px'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    '& .successCheckMark': {
      position: 'absolute',
      left: '50%',
      top: getScaledValue('305px'),
      transform: 'translateX(-50%)',
      width: getScaledValue('400px'),
      height: getScaledValue('400px'),
      padding: getScaledValue('100px'),
      boxSizing: 'border-box',
    },

    '& .nextButton': {
      position: 'absolute',
      left: `calc(50% - ${getScaledValue('45px')})`,
      top: getScaledValue('695px'),
      width: getScaledValue('90px'),
      height: getScaledValue('90px'),
    },
  },
});

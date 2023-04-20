import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')`,

  main: {
    position: 'relative',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#BCF7FF',
    userSelect: 'none',

    '& .header': {
      position: 'absolute',
      left: '15px',
      right: '15px',
      top: '40px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 700,

      '& .title': {
        fontSize: '20px',
        color: '#293671',
        lineHeight: 1.15,
        textAlign: 'center',
        flex: 1,
      },
    },

    '& .tasksBlock': {
      position: 'absolute',
      width: '400px',
      left: '50%',
      top: '140px',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      padding: '15px',
      boxSizing: 'border-box',

      '& .taskBlock': {
        width: '110px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',

        '& .image': {
          flex: 1,
          marginBottom: '10px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        },

        '& .wordBlock': {
          position: 'relative',
          flexBasis: '20px',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '24px',
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
            gap: '2px',

            '& .cell': {
              width: '20px',
              height: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '5px',
            },
          },
        },
      },
    },

    '& .taskText': {
      position: 'absolute',
      left: '50%',
      top: '291px',
      width: '400px',
      height: '44px',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#293671',
      fontSize: '24px',
      fontWeight: 700,
    },

    '& .selectedWord': {
      position: 'absolute',
      left: '50%',
      top: '291px',
      transform: 'translateX(-50%)',
      boxSizing: 'border-box',
      padding: '3px 9px',
      backgroundColor: '#F4D584',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#654900',

      '& .word': {
        fontSize: '32px',
        fontWeight: 700,
      },

      '& .button': {
        display: 'flex',
        width: '35px',
        height: '35px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 700,
        borderRadius: '100%',
        boxShadow: '0 2px 0 #000000',
        lineHeight: 1,
      },
    },

    '& .field': {
      position: 'absolute',
      left: '50%',
      top: '355px',
      width: '400px',
      height: '500px',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',

      '& .cell': {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    '& .successCheckMark': {
      position: 'absolute',
      left: '50%',
      top: '330px',
      transform: 'translateX(-50%)',
      width: '400px',
      height: '400px',
      padding: '100px',
      boxSizing: 'border-box',
    },

    '& .nextButton': {
      position: 'absolute',
      left: '50%',
      top: '720px',
      width: '90px',
      height: '90px',
      transform: 'translateX(-50%)',
    },
  },
});

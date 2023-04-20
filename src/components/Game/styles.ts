import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#BCF7FF',

    '& .backButton': {
      position: 'absolute',
      left: '15px',
      top: '54px',
      width: '48px',
      height: '48px',
    },

    '& .hintButton': {
      position: 'absolute',
      right: '15px',
      top: '54px',
      width: '48px',
      height: '48px',
    },
  },
});

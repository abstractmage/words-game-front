import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    width: '100%',
    height: '100%',

    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
});

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@import': 'url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css)',

  '@global': {
    body: {
      backgroundColor: '#BCF7FF',
    },
  },
});

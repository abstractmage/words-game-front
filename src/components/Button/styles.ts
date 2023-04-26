import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    borderRadius: '100px',
    backgroundColor: '#FFFFFF',
    color: 'var(--color)',
    boxShadow: '0 3px 0 var(--color)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&_isClickable': {
      cursor: 'pointer',
    },

    '&_isHoverable': {
      '@media (hover)': {
        transition: 'transform 200ms',

        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
});

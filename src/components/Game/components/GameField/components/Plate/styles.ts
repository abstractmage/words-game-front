import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    '&.main': {
      // '--scaling': '1px',
      position: 'relative',
      width: 'calc(90 * var(--scaling))',
      height: 'calc(90 * var(--scaling))',

      '& .back': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        borderRadius: 'calc(16 * var(--scaling))',
      },

      '& .content': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '& .contentInner': {
        fontSize: 'calc(54 * var(--scaling))',
        fontWeight: 700,
      },

      '&_direction': {
        '&_left': {
          '& .back': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        },

        '&_right': {
          '& .back': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        },

        '&_top': {
          '& .back': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        },

        '&_bottom': {
          '& .back': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },

      '&_state': {
        '&_default': {
          '& .back': {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 calc(5 * var(--scaling)) 0 #293671',
          },

          '& .content': {
            color: '#293671',
          },
        },

        '&_dark': {
          '& .back': {
            backgroundColor: '#D0D0D0',
            boxShadow: '0 calc(5 * var(--scaling)) 0 #293671',
          },

          '& .content': {
            color: '#717171',
          },
        },

        '&_selected': {
          '& .back': {
            backgroundColor: '#F4D584',
            boxShadow: '0 calc(-5 * var(--scaling)) 0 #654900',
            transform: 'translateY(calc(5 * var(--scaling)))',
          },

          '& .content': {
            color: '#654900',
            transform: 'translateY(calc(5 * var(--scaling)))',
          },
        },

        '&_success': {
          '& .back': {
            backgroundColor: '#8ACB00',
          },

          '& .content': {
            color: '#FFFFFF',
          },
        },

        '&_pressed': {
          '& .back': {
            backgroundColor: '#F4D584',
            boxShadow: '0 calc(5 * var(--scaling)) 0 #654900',
            transform: 'scale(1.11)',
          },

          '& .content': {
            color: '#654900',
          },
        },

        '&_pressedSuccess': {
          '& .back': {
            backgroundColor: '#8ACB00',
            boxShadow: '0 calc(5 * var(--scaling)) 0 #654900',
            transform: 'scale(1.11)',
          },

          '& .content': {
            color: '#FFFFFF',
          },
        },

        '&_pressedError': {
          '& .back': {
            backgroundColor: '#FF0000',
            boxShadow: '0 calc(5 * var(--scaling)) 0 #654900',
            transform: 'scale(1.11)',
          },

          '& .content': {
            color: '#FFFFFF',
          },
        },
      },

      '&_isActive': {
        cursor: 'pointer',
      },

      '&_isHoverable': {
        '@media (hover)': {
          '&:hover': {
            '&.main_state_default': {
              '& .back': {
                backgroundColor: '#FAEDCB',
                boxShadow: '0 calc(5 * var(--scaling)) 0 #293671',
              },

              '& .content': {
                color: '#293671',
              },
            },
          }
        },
      },

      '&_isStateTransitioning': {
        '& .back': {
          transition:
            'background-color 200ms, box-shadow 200ms, transform 200ms, border-radius 200ms',
        },

        '& .content': {
          transition: 'color 200ms',
        },
      },
    },
  },
});

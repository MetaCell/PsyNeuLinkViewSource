import { createTheme } from '@mui/material/styles';
import vars from './assets/styles/variables';

const { primaryBg } = vars;
const theme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          background: ${primaryBg}
        }

        body {
          background-color:${primaryBg}
          font-size: 1rem
        }
      `,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          useNextVariants: true,
        },

        h1: {
        },
        h2: {
        },
        h3: {
        },
        h4: {
        },
        h5: {
        },
        h6: {
        },
        subtitle1: {
        },
        subtitle2: {
        },
        body1: {
        },
        body2: {
        },
        caption: {
        },
        button: {
        },
        overline: {
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          // fontFamily: 'ABC Favorit Unlicensed Trial',
          fontWeight: '400',
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
          letterSpacing: '-0.001em',
          color: '#A2A2A2',
          height: '1.5rem',
        },

        label: {
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontWeight: '400',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '-0.001em',
            color: '#292929',
            display: 'flex',
            alignItems: 'center',

            '& img': {
              display: 'block',
              marginRight: '0.75rem'
            },
          },

          '& .MuiLink-root': {
            color: '#A2A2A2',
          },
        },

        separator: {
          color: '#A2A2A2',
          marginLeft: '0.25rem',
          marginRight: '0.25rem',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          textTransform: 'none',
          letterSpacing: '-0.001em',
          padding: '0.625rem 0.75rem',
          borderRadius: '0.5rem',
          '&:not(:last-child)': {
            marginRight: '0.5rem'
          },
          '& img': {
            display: 'block',
            marginRight: '0.5rem'
          },
        },

        text: {
          color: '#A2A2A2',
        },

        containedPrimary: {
          backgroundColor: '#4353FF',
          "&:hover": {
            backgroundColor: '#3443E1',
          },
        },

        containedSecondary: {
          backgroundColor: '#ECEEFF',
          color: '#4353FF',
          "&:hover": {
            backgroundColor: '#DEE1FF',
            color: '#4353FF',
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          '&.customSwitch': {
            padding: '0.125rem',
            background: '#F4F4F4',
            borderRadius: '0.625',
            display: 'flex',
            alignItems: 'center',

            '& .MuiListItemButton-root': {
              padding: '0.5 0.75',
              borderRadius: '0.5rem',

              '&:not(:last-child)': {
                marginRight: '0.125rem',
              },

              '&.Mui-selected': {
                background: '#FFFFFF',
                boxShadow: '0 0.0625rem 0.1875rem rgba(16, 24, 40, 0.1), 0 0.0625rem 0.125rem rgba(16, 24, 40, 0.06)',

                '& .MuiListItemText-primary': {
                  color: '#292929'
                },
              },
            },

            '& .MuiListItemText-root': {
              margin: 0
            },

            '& .MuiListItemText-primary': {
              fontWeight: '500',
              fontSize: '0.875rem',
              lineHeight: '1.1875rem',
              letterSpacing: '-0.001em',
              color: '#A2A2A2',
            },
          },
        }
      }
    }
  },
};

export default createTheme(theme);
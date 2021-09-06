import createMuiTheme from '@material-ui/core/styles/createTheme';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#54D190'
        },
        secondary: {
            main: '#E6B964'
        }
    },
    overrides: {
        MuiButton: {
          root: {
            textTransform: 'none',
          }
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                fontSize: '1.1rem'
            }
        }
    },
    shadows: [
        'none',
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
        '0 5px 20px rgba(178, 199, 208, 0.13)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)',
        '0 1px 5px 0 rgba(127, 131, 227, 0.21)'
    ]
});

export default theme;
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#CFAB7A',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Kiwi Maru',
    button: {
      color: '#CFAB7A',
    },
  },
  shape: {
    borderRadius: '3px',
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiCard: {
      root: {
        backgroundColor: '#000000',
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          '& fieldset': {
            BorderColor: '#CFAB7A',
          },
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'outlined',
      color: 'primary',
    },
  },
});

export default theme;

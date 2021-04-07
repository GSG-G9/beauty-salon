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
    background: {
      default: '#000000',
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
  },
  props: {
    MuiButton: {
      variant: 'outlined',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'filled',
    },
    MuiSelect: {
      disableRipple: true,
    },
  },
});

export default theme;

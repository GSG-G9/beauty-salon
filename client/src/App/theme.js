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
    fontFamily: "Syne Mono",
    button: {
      color: "#CFAB7A"
    }
  },
  shape: {
    borderRadius: '3px'
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',      
      },
    },
    MuiCard : {
      root: {
        backgroundColor: '#000000',
      },
      
    }
  },
  props: {
    MuiButton: {
      disableRipple: 'true',
      variant : "outlined",
      color: "primary",
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
      variant: 'filled',
      
    },
   
  }
});

export default theme;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '85%',
    padding: '3em',
    height: '700px',
    '@media (max-device-width: 600px)': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10%',
      height: '600px',
      padding: 0,
      '& .MuiBox-root-24': {
        padding: '0',
      },
    },
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (max-device-width: 600px)': {
      width: '19rem',
    },
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    minHeight: '495px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '2%',
    '& h2': {
      fontSize: '2.2em',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '7%',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      '@media (max-device-width: 600px)': {
        fontSize: '2em',
      },
    },
    '& h3': {
      fontSize: '1.8em',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15%',
      marginBottom: '7%',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      '@media (max-device-width: 600px)': {
        fontSize: '1.8em',
        marginTop: '35%',
        marginLeft: '7%',
      },
    },
  },
}));

export default useStyles;

import makeStyles from '@material-ui/core/styles/makeStyles';

import lost from '../../assets/images/black.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    justifyContent: 'center',
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      minHeight: '87.3vh',
      justifyContent: 'center',
    },
    minHeight: '82.8vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: `url(${lost})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  left: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      width: '80%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  right404: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
    fontSize: '1200%',
  },
  text1: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text2: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  btn: {
    marginTop: '2rem',
    width: '15rem',
  },
}));

export default useStyles;

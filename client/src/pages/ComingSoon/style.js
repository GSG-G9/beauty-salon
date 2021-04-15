import makeStyles from '@material-ui/core/styles/makeStyles';

import lost from '../../assets/images/black.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${lost})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      minHeight: '87.3vh',
      justifyContent: 'center',
    },
    minHeight: '82.8vh',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  left: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      width: '90%',
      marginTop: '2rem',
      marginRight: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '65%',
    marginRight: '2rem',
  },
  right404: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '330%',
      fontWeight: 'bold',
    },
    fontSize: '600%',
  },
  text1: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text2: {
    // color: '#C0C0C0',
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

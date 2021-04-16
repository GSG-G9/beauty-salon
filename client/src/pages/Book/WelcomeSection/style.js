import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/images/Salon+pic+cover 1.svg';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundImage: `url("${logo}")`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.77)',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  welcomeContainer: {
    width: '45%',
    justifyContent: 'center',
  },
  typo: {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3em',
  },
  caption: {
    fontSize: '1.1em',
    paddingTop: '0.5em',
    paddingBottom: '2.3em',
  },
}));

export default useStyles;

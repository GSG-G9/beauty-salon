import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/images/Salon+pic+cover 1.svg';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundImage: `url("${logo}")`,
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 69px - 49px)',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  typo: {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    '@media (max-device-width: 600px)': {
      fontSize: '1.55em',
    },
  },
  caption: {
    fontSize: '1em',
    paddingTop: '0.5em',
    paddingBottom: '2.3em',
    '@media (max-device-width: 600px)': {
      fontSize: '0.77em',
    },
  },
}));

export default useStyles;

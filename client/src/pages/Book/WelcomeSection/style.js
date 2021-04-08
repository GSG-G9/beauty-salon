import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/images/Salon+pic+cover 1.svg';

const useStyles = makeStyles(() => ({
  WeclomeContainer: {
    backgroundImage: `url("${logo}")`,
    backgroundSize: 'cover',
    height: 250,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.66)',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  typo: {
    textAlign: 'center',
    position: 'relative',
    color: 'white',
  },
  heading: {
    fontSize: '3em',
  },
  caption: {
    fontSize: '1.1em',
    paddingTop: '0.5em',
  },
}));

export default useStyles;

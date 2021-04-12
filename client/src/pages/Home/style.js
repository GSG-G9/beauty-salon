import { makeStyles } from '@material-ui/core';
import landingBackground from '../../assets/images/landingBackground.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'justify-content',
  },
  firstSec: {
    '&::before': {
      backgroundImage: `url(${landingBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '100vh',
      opacity: '0.5',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundImage: `url(${landingBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100vh',
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '40rem',
    marginBottom: '2rem',
    paddingRight: '5rem',
  },
  text: {
    marginBottom: '1rem',
  },
  text2: {
    marginBottom: '2.5rem',
  },
  button: {
    width: '25%',
    marginBottom: '0.7rem',
    alignSelf: 'center',
  },
  buyNowBtn: {
    background: theme.palette.primary.main,
    color: '#fff',
  },
  servicesSec: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5rem',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '2rem',
    width: '75%',
    paddingTop: '5rem',
    paddingBottom: '8rem',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  blogsSec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: '2rem',
    marginBottom: '4rem',
  },
  moreBlogsBtn: {
    display: 'flex',
    width: '10%',
  },
}));

export default useStyles;

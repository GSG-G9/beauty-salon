import { makeStyles } from '@material-ui/core';
import landingBackground from '../../assets/images/landingBackground.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'justify-content',
  },
  firstSec: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `none`,
      height: '100vh',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundImage: `url(${landingBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  },
  intro: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: '80%',
      paddingRight: '0vw',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '40rem',
    marginBottom: '2rem',
    paddingRight: '5vw',
  },
  text: {
    [theme.breakpoints.down('md')]: {
      // fontSize: '4vw',
    },
    marginBottom: '1rem',
    // fontSize: '2.4vw',
    textShadow: '3px 3px 5px #000',
  },
  text2: {
    [theme.breakpoints.down('md')]: {
      // fontSize: '3vw',
    },
    marginBottom: '2.5rem',
    // fontSize: '1.5vw',
  },
  button: {
    width: '8rem',
    fontSize: '1rem',
    marginBottom: '0.7rem',
    alignSelf: 'center',
  },
  buyNowBtn: {
    background: theme.palette.primary.main,
    color: '#fff',
  },
  servicesSec: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5rem',
  },
  services: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '2rem',
    width: '75%',
    height: '100%',
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
    width: '25%',
    fontSize: '2vw',
    marginTop: '2rem',
  },
}));

export default useStyles;

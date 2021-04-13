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
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
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
    marginBottom: '1rem',
    textShadow: '0px 0px 5px #000',
  },
  text2: {
    [theme.breakpoints.down('md')]: {},
    textShadow: '0px 0px 5px #000',
    marginBottom: '2.5rem',
  },
  button: {
    width: '8rem',
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
    marginTop: '1rem',
  },
  services: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'space-around',
      height: '120%',
    },
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '2rem',
    width: '75%',
    height: '100%',
    paddingTop: '3rem',
    paddingBottom: '5rem',
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
    width: '10rem',
    // fontSize: '2vw',
    marginTop: '3rem',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';
import landingBackground from '../../assets/images/landingBackground.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'justify-content',
  },
  firstSec: {
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
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: '5vw',
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
    fontSize: '2.4vw',
  },
  text2: {
    marginBottom: '2.5rem',
    fontSize: '1.5vw',
  },
  button: {
    width: '25%',
    fontSize: '1vw',
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

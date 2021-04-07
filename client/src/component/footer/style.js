import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '6.3vh',
    borderTop: '0.5px solid #111010',
    color: 'white',
    '@media (min-device-width: 600px) and (max-device-width: 1000px)': {
      height: '3.8vh',
    },
    '@media (max-device-width:  599px)': {
      height: '3.8vh',
    },
  },
  iconsGrid: {
    width: '30%',
    justifyContent: 'flex-end',
  },
  imgContainer: {
    width: '30%',
  },
  typo: {
    '@media (max-device-width: 600px)': {
      fontSize: '0.57em',
    },
  },
  img: {
    width: 'auto',
    height: 33,
    '@media (max-device-width: 600px)': {
      height: 23,
    },
  },
  MuiSvgIconRoot: {
    width: '2.5em',
    '@media (min-device-width: 599px) and (max-device-width: 1000px)': {
      width: '2.3em',
    },
    '@media (max-device-width: 600px)': {
      width: '0.55em',
      paddingRight: '0.33em',
    },
  },
}));

export default useStyles;

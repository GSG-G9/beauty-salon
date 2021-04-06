import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '90vh',
    height: '10vh',
    borderTop: '0.5px solid #111010',
    color: 'white',
  },
  MuiBottomNavigationRoot: {
    height: '6vh',
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
    width: 50,
    height: 45,
    '@media (max-device-width: 600px)': {
      width: 35,
      height: 30,
    },
  },
  MuiSvgIconRoot: {
    width: '3em',
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

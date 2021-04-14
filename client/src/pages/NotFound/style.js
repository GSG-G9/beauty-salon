import makeStyles from '@material-ui/core/styles/makeStyles';

import lost from '../../assets/images/lost4.jpg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '450px',
    backgroundImage: `url(${lost})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  text1: {
    color: '#000',
  },
}));

export default useStyles;

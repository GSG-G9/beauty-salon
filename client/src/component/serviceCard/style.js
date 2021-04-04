import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 450,
    border: '2px solid #CFAB7A',
    width: 240,
    textAlign: 'center',
  },
  image: {
    height: 220,
    width: 220,
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#131212',
  },
});
export default useStyles;

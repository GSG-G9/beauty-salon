import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 400,
    borderBottom: '1px solid #CFAB7A',
    width: 240,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    height: 220,
    width: 240,
    opacity: 0.6,
  },

  button: {
    backgroundColor: '#131212',
    justifyItems: 'flex-end',
  },
});
export default useStyles;

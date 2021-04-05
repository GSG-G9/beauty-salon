import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 400,
    borderBottom: '1px solid #CFAB7A',
    width: 240,
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
  },
  image: {
    height: 220,
    width: 240,
  },
  description: {
    // textAlign: 'left',
  },
  button: {
    backgroundColor: '#131212',
  },
});
export default useStyles;

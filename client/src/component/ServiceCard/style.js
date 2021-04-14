import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 400,
    display: 'flex',
  },
  root: {
    width: 240,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column ',
    justifyContent: 'flex-end',
  },
  image: {
    height: 220,
    width: 240,
    opacity: 0.6,
  },
  link: {
    backgroundColor: '#131212',
    border: '1px solid  #CFAB7A',
    padding: 7,
    textDecoration: 'none',
    color: theme.palette.primary.main,
    alignSelf: 'flex-end',
  },
}));
export default useStyles;

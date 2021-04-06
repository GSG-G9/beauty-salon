import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

  link: {
    backgroundColor: '#131212',
    justifyItems: 'flex-end',
    border: '1px solid  #CFAB7A',
    padding: 7,
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));
export default useStyles;

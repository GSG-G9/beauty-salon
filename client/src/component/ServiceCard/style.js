import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 400,
    display: 'flex',
  },
  root: {
    width: 500,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column ',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  image: {
    height: 220,
    width: 240,
    opacity: 0.6,
    objectFit: 'cover',
  },
  link: {
    backgroundColor: '#131212',
    border: '1px solid  #CFAB7A',
    padding: 7,
    textDecoration: 'none',
    color: theme.palette.primary.main,
    alignSelf: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      width: 100,
    },
  },
}));
export default useStyles;

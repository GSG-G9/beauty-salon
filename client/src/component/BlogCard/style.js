import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '3rem',
    width: '75%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  left: {
    width: '100%',
  },
  image: {
    width: '250px',
    height: 'auto',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: '0.7rem',
  },
  desc: {
    marginBottom: '2%',
  },
  readMore: {
    width: '6rem',
    fontSize: '1rem',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;

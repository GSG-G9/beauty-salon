import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 4, 3),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'hidden',
      width: '100vw',
      margin: 0,
    },
  },
  title: {
    margin: theme.spacing(6, 0, 0),
  },
  container: {
    display: 'flex',
    gap: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    justifyContent: 'flex-start',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '50%',
    margin: theme.spacing(3, 40, 3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 5, 3),
      width: '30%',
    },
  },
  typo: {
    margin: theme.spacing(3, 6, 3),
  },
  alert: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
}));

export default useStyles;

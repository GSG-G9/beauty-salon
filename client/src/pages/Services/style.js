import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 4, 3),
    width: '100%',
  },
  title: {
    margin: theme.spacing(6, 0, 0),
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: theme.spacing(4, 0, 6),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '50%',
    margin: theme.spacing(3, 40, 3),
  },
  typo: {
    margin: theme.spacing(3, 6, 3),
  },
  alert: {
    width: '50%',
  },
}));

export default useStyles;

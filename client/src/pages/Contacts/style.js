import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    margin: theme.spacing(4, 4, 6),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      width: '100vw',
      overflowX: 'hidden',
      margin: 0,
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '10%',
    margin: theme.spacing(3, 70, 3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 5, 3),
      width: '15%',
    },
  },
  map: {
    height: 400,
    margin: theme.spacing(0, 0, 0, 15),
    [theme.breakpoints.down('sm')]: {
      height: 320,
      margin: theme.spacing(0, 0, 0, -1),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: theme.spacing(0, 0, 0, 0),
    },
  },
  title: {
    alignSelf: 'flex-start',
    margin: theme.spacing(8, 0, 0, 20),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 1, 0),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: theme.spacing(0, 0, 0, 0),
    },
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: theme.spacing(7, 0, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '50%',
    },
  },
  message: {
    width: '35%',
    margin: theme.spacing(1, 15, 0, -10),
    alignSelf: 'flex-start',
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiFormLabel-root': {
      color: '#cfab7a',
    },
    backgroundColor: '#000',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(1, 20, 0, 0),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '50%',
    },
  },
  button: {
    margin: theme.spacing(3, 0, 0),
    width: 90,
    color: theme.palette.secondary.main,
  },
  alert: {
    width: '47%',
    margin: theme.spacing(2, 0, 0, 12),
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: theme.spacing(2, 0, 0, 2),
    },
  },
}));
export default useStyles;

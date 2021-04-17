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
  img: {
    height: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: 200,
      objectFit: 'cover',
    },
  },
  title: {
    alignSelf: 'flex-start',
    margin: theme.spacing(9, 0, 0, 15),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 1, 0),
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
    width: '50%',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '50%',
    },
  },
  message: {
    width: '30%',
    margin: theme.spacing(1, 10, 0, 0),
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

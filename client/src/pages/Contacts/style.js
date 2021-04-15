import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    margin: theme.spacing(4, 4, 6),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '10%',
    margin: theme.spacing(3, 70, 3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 5, 3),
      width: '2%',
    },
  },
  img: {
    height: 400,
    objectFit: 'cover',
  },
  title: {
    alignSelf: 'flex-start',
    margin: theme.spacing(9, 0, 0, 15),
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: theme.spacing(7, 0, 0),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignSelf: 'flex-start',
  },
  message: {
    width: '30%',
    margin: theme.spacing(1, 10, 0, 0),
    alignSelf: 'flex-start',
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: '#000',
    resize: 'none',
    height: 400,
    color: theme.palette.secondary.main,
  },
  button: {
    margin: theme.spacing(3, 0, 0),
    width: 90,
    color: theme.palette.secondary.main,
  },
  alert: {
    width: '47%',
    margin: theme.spacing(2, 0, 0, 12),
  },
}));
export default useStyles;

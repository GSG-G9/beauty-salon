import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://yesalon.com/wp-content/uploads/2019/03/gallery-14.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.primary.type,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: '1.2rem',
  },

  iconLock: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, 7, 1, 0),
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;

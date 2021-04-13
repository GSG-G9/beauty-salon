import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://images-ext-1.discordapp.net/external/zYn2idcWuDzf2-rLxlY36o0wk6ypb7izLNsmYnTUYnw/%3Fixlib%3Drb-1.2.1%26ixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1500%26q%3D80/https/images.unsplash.com/photo-1581674210501-c760093514e8?width=681&height=454)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.primary.type,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.66,
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20vh',
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

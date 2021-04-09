import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '2rem',
    width: '75%',
  },

  image: {
    width: '10em',
    height: 'auto',
    marginRight: '2rem',
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
    width: '20%',
    color: theme.palette.primary.main,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

export default useStyles;

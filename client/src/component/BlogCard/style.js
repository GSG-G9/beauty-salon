import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '2rem',
    width: '75%',
  },
  left: {
    width: '100%',
    marginRight: '2rem',
  },
  image: {
    width: 200,
    height: 'auto',
    // marginRight: '2rem',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: '0.7rem',
    fontSize: '2vw',
  },
  desc: {
    marginBottom: '2%',
    fontSize: '1vw',
  },
  readMore: {
    width: '25%',
    fontSize: '1.5vw',
    color: theme.palette.primary.main,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

export default useStyles;

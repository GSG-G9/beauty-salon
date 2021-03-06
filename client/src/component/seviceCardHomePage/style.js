import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: 170,
      height: 170,
    },

    position: 'relative',
    height: 200,
    width: 200,
    borderRadius: '50%',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  media: {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    '&::before': {
      content: '""',
      background: 'rgba(0, 0, 0, 0.55)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0px',
      left: '0px',
    },
  },

  service_name: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    color: `${theme.palette.secondary.main}`,
    fontSize: '1.66em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default useStyles;

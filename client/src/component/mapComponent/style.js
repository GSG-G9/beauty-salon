import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '70vh',
    width: '70vw',
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
      width: '90vw',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '40vh',
      width: '90vw',
    },
  },
  card: {
    borderRadius: '1rem',
    width: '200px',
    backgroundColor: theme.palette.background.default,
  },
}));
export default useStyles;

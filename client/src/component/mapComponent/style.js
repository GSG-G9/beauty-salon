import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '80vh',
    width: '80vw',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  card: {
    borderRadius: '1rem',
    width: '200px',
    backgroundColor: theme.palette.background.default,
  },
}));
export default useStyles;

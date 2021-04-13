import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    width: '50%',
  },
}));

export default useStyles;

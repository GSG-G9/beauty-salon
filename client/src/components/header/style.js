import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    // flexGrow: 1,
  },
  headerLeftSide: {
    // display: 'flex',
    justifyContent: 'space-between',
  },
  headerRightSide: {},
}));

export default useStyles;

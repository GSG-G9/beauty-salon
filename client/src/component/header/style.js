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
    fontSize: '2em',
    color: '#fff',
    textDecoration: 'none',
  },
  headerLeftSide: {
    // display: 'flex',
    justifyContent: 'space-between',
  },
  headerRightSide: {},
  options: {
    padding: '1em',
    color: '#fff',
    textDecoration: 'none',
  },
  logout: {
    marginLeft: '1em',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      marginTop: '5px',
    },
  },
  header: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    display: 'block',
    fontSize: '2em',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: 'f8f8ff',
      transform: 'scale(1.1)',
      boxShadow: '#888888',
    },
    '&::first-letter': {
      fontSize: '130%',
      color: theme.palette.primary.main,
    },
  },
  headerLeftSide: {
    [theme.breakpoints.up('sm')]: {
      width: '15em',
    },
    justifyContent: 'space-between',
  },
  headerRightSide: {
    [theme.breakpoints.up('sm')]: {
      width: '15em',
    },
  },
  options: {
    padding: '1em',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '1.5em',
    '&:hover': {
      background: '#101010',
    },
  },
  menuPaper: {
    backgroundColor: '#0e1717',
  },
  logout: {
    marginLeft: '1em',
  },
  logoutMobile: {
    backgroundColor: 'red',
  },
}));

export default useStyles;
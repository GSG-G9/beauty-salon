import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  tabs: {
    maxWidth: '100%',
    display: 'flex',
  },
  userAvatar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '3em',
    '& h3': {
      paddingTop: '1.5em',
      paddingBottom: '1.8em',
      fontSize: '1.5em',
    },
  },
  avatar: {
    width: '3em',
    height: '3em',
  },
  tab: {
    textAlign: 'left',
    display: 'flex',
    textTransform: 'none',
    minHeight: '2em',
    borderBottom: '1px solid #f5f5f5',
    '& span': {
      display: 'inline',
      color: '#f5f5f5',
      fontSize: '1em',
      padding: '0em 1.2em',
      '& svg': {
        marginBottom: '-6px !important',
        width: '1.2em',
        height: '1.2em',
        marginRight: '10px',
      },
    },
  },
  mainContent: {
    margin: '0 auto',
    width: '100%',
    height: '80vh',
    '& > div': {
      '& form': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
  },
  sideBarContainer: {
    width: 400,
  },
}));

export default useStyles;

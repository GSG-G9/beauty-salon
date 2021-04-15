import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '@media (max-device-width:  599px)': {
      flexDirection: 'column',
    },
  },
  tabs: {
    maxWidth: '100%',
    display: 'flex',
    '& .PrivateTabIndicator-colorSecondary-22': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .PrivateTabIndicator-vertical-23': {
      left: 0,
    },
  },
  userAvatar: {
    width: '100%',
    display: 'flex',
    color: theme.palette.primary.main,
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
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    textAlign: 'left',
    display: 'flex',
    textTransform: 'none',
    minHeight: '2em',
    paddingBottom: '1.5em',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    '& span': {
      display: 'inline',
      color: theme.palette.primary.main,
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
    margin: theme.spacing(7, 0, 0, 0),
    '@media (max-device-width:  599px)': {
      display: 'none',
    },
  },
  topBar: {
    display: 'none',
    '@media (max-device-width:  599px)': {
      display: 'block',
    },
  },
}));

export default useStyles;

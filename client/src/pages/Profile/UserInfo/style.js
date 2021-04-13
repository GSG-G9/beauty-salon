import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 750,
    border: '1px solid #c7c7c7',
    borderRadius: '5px',
    '& h2': {
      fontSize: '2.2em',
      padding: '2em 1em',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
  avatar: {
    width: '5em',
    height: '5em',
  },
  userData: {
    fontColor: theme.palette.secondary.main,
    marginTop: 60,
    backgroundColor: theme.palette.background.default,
  },
  userDataField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBlock: '0.5em',
    paddingLeft: '3em',
    borderBottom: '1px solid #c7c7c7',
    justifyContent: 'center',
  },
  userDataFieldLabel: {
    width: '15%',
  },
  userDataFieldValue: {
    width: '50%',
  },
  btnsBox: {
    marginBlock: '3em',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    width: '12%',
  },
  userDataFieldValue: {
    width: '50%',
  },
}));

export default useStyles;

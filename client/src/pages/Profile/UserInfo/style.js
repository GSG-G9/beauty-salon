import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '2%',
    '& h2': {
      fontSize: '2.2em',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    color: theme.palette.primary.main,
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
    paddingBottom: '1.5em',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
  userDataFieldLabel: {
    width: '17%',
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

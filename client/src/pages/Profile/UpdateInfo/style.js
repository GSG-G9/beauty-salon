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
    margin: '0 auto',
    backgroundColor: '#a52525',
  },
  userData: {
    color: '#757575',
    marginTop: 60,
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
  editBtn: {
    color: '#F5F5F5',
    marginRight: '1em',
  },
  deleteBtn: {
    borderColor: '#D52525',
    color: '#D52525',
    transition: 'all 0.25s',
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#D52525',
      color: '#F5F5F5',
      transition: 'all 0.25s',
    },
  },
  spin: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
}));

export default useStyles;

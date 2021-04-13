import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%',
    marginTop: '1rem',
    marginBottom: '3rem',
  },
  title: {
    // alignSelf: 'flex-start',
    width: '80%',
    marginLeft: '3rem',
    marginTop: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #fff',
  },
}));

export default useStyles;

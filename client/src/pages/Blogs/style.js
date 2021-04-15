import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '3rem',
  },
  title: {
    width: '80%',
    marginLeft: '3rem',
    marginTop: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #fff',
  },
}));

export default useStyles;

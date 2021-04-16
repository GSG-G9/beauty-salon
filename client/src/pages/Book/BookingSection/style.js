import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bookingSectionContainer: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    border: `1.5px solid ${theme.palette.secondary.main}`,
    borderRadius: '4.5px',
    marginBottom: '14.3vh',
  },
  submitBtn: {
    width: 150,
    letterSpacing: 3,
    display: 'block',
    height: 56,
    marginLeft: '0.43em',
  },
  errorMessage: {
    backgroundColor: 'red',
    margin: '1em',
  },
  successfulMessage: {
    backgroundColor: 'green',
    margin: '1em',
  },
}));

export default useStyles;

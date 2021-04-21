import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bookingSectionContainer: {
    maxWidth: '450px',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    border: `1.5px solid ${theme.palette.secondary.main}`,
    borderRadius: '4.5px',
    backgroundColor: 'rgba(255,255,255,.2)',
  },
  submitBtn: {
    width: '100px',
    letterSpacing: 3,
    display: 'block',
    height: '2.5rem',
    marginBottom: '1rem',
  },
  errorMessage: {
    backgroundColor: '#b71c1c',
    margin: '1em',
    color: '#fff !important',
  },
  inputDate: {
    width: '270px',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bookingSectionContainer: {
    width: '40%',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '6vh',
  },
  dateTimeContainer: {
    // backgroundColor: 'blue',
    width: '55%',
  },
  selectInputsContainer: {
    // backgroundColor: 'yellow',
    width: '43%',
    // flexDirection: 'column',
  },
  sendBtn: {
    width: '9%',
    letterSpacing: 1.5,
    display: 'block',
    margin: 'auto',
    marginBottom: '2.8vh',
  },
}));

export default useStyles;

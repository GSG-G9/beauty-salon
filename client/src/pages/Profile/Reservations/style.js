import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    minHeight: '495px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '2%',
    '& h2': {
      fontSize: '2.2em',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '7%',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
    '& h3': {
      fontSize: '2.2em',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15%',
      marginBottom: '7%',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;

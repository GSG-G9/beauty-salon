import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: 750,
    overflowY: 'scroll',
    border: '1px solid #c7c7c7',
    borderRadius: '5px',
    '& h2': {
      fontSize: '2.2em',
      padding: '2em 1em',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    opacity: '0.6',
    border: `0.7px solid ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  service_name: {
    textDecoration: 'none',
    color: `${theme.palette.secondary.main}`,
    fontSize: '1.8em',
  },
}));

export default useStyles;

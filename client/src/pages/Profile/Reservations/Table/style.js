import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  deleteBtn: {
    transition: 'all 0.25s',
    '&:hover': {
      color: '#E51515',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    '& .MuiTableCell-head': {
      color: theme.palette.primary.main,
    },
    '& .MuiTableCell-body': {
      color: theme.palette.primary.main,
    },
    '& .MuiTableCell-root': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  deleteBtn: {
    transition: 'all 0.25s',
    '&:hover': {
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;

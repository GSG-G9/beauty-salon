import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    '& .MuiTableCell-head': {
      color: theme.palette.primary.main,
      '@media (max-device-width: 600px)': {
        fontSize: '.7em',
      },
    },
    '& .MuiTableCell-body': {
      color: theme.palette.primary.main,
      '@media (max-device-width: 600px)': {
        fontSize: '.7em',
      },
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
  hidden: {
    '@media (max-device-width: 600px)': {
      display: 'none',
    },
  },
}));

export default useStyles;

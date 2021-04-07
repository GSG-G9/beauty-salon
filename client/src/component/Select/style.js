import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiSelect-icon': {
      color: theme.palette.primary.main,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;

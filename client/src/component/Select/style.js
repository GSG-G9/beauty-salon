import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    '&:before': {
      borderColor: theme.palette.primary.main,
    },
    '&:after': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#cfab7a',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
      borderColor: '#fdabab',
    },
    '& .MuiFormLabel-root': {
      color: '#cfab7a',
    },
    '& .MuiSelect-icon': {
      color: '#cfab7a',
    },
  },
}));

export default useStyles;

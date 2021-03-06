import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiFormLabel-root': {
      color: '#cfab7a',
    },
    '& .MuiOutlinedInput-input:-webkit-autofill': {
      boxShadow: ' 0 0 0 100px black inset',
    },
  },
}));

export default useStyles;

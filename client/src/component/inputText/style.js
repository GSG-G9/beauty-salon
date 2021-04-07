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
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      '& fieldset': {
        BorderColor: '#CFAB7A',
      },
    },
  },
}));

export default useStyles;

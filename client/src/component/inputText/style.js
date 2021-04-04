import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      '& fieldset': {
        BorderColor: theme.palette.primary,
      },
    },
  },
}));

export default useStyles;

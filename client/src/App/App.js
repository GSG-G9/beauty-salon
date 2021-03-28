import { ThemeProvider } from '@material-ui/core/styles';

import { Button, Card, TextField, Typography } from '@material-ui/core';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
     
        <Card>
        <Button color='primary' variant='contained' >
          I'm a button
        </Button><Button color='secondary' variant='contained' >
          I'm a button
        </Button>
        <Typography> Hello wold</Typography>
        </Card>
        <TextField label="Hello"></TextField>
      </div>
    </ThemeProvider>
  );
};

export default App;

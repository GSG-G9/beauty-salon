import { ThemeProvider } from '@material-ui/core/styles';

import { Button, Card, TextField, Typography } from '@material-ui/core';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        Hello From Beauty Salon
      </div>
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="outlined" color="primary">
          I'm a button
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;

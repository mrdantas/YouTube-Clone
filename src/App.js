import React from 'react';
import purple from '@material-ui/core/colors/purple';
import { Button, ThemeProvider, createTheme } from '@material-ui/core';

function App() {
  const theme = createTheme({
    pallete: {
      primary: {
        main: purple[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </ThemeProvider>
  );
}

export default App;

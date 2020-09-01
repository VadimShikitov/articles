import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { Routes } from './components/Routes'

const App = () => {
  const theme = createMuiTheme({
    palette: {
      background: {
        default: '#D3D3D3',
      },
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;

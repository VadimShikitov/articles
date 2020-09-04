import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { Routes } from './components/Routes';
import { muiTheme } from './mui-theme';

const App = () => {

  const theme = createMuiTheme(muiTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;

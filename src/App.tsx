import React, { useMemo } from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { HeaderComponent } from './components/HeaderComponent';
import { ArticleOverViewComponent } from './components/ArticleOverViewComponent';

const App: React.FunctionComponent = () => {
  const theme = useMemo(
    () =>
      createMuiTheme({
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
      }),
    [],
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
      <ArticleOverViewComponent />
    </MuiThemeProvider>
  );
};

export default App;

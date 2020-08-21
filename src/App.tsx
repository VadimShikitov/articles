import React, { useMemo } from 'react';
import { HeaderContainer } from './containers/HeaderContainer';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { ArticleOverViewContainer } from './containers/ArticleOverviewContainer';

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
      <HeaderContainer />
      <ArticleOverViewContainer />
    </MuiThemeProvider>
  );
};

export default App;

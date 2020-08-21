import React, { useMemo } from 'react';
import { HeaderContainer } from './containers/HeaderContainer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const App: React.FunctionComponent = () => {
  const theme = useMemo(
    () =>
      createMuiTheme({
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
      <div>
        <HeaderContainer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;

import { ThemeOptions } from '@material-ui/core';

export const muiTheme: ThemeOptions = {
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
}; 
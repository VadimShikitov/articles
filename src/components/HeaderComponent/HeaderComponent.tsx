import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ReduxLogoComponent } from '../ReduxLogoComponent';
import { Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const HeaderComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <ReduxLogoComponent />
        <Typography variant='h4'>Vadim Shikitov</Typography>
        <Button variant='contained' color='secondary'>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

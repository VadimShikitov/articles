import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { ReduxLogoComponent } from '../ReduxLogoComponent';


const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <ReduxLogoComponent />
        <Typography variant='h4'>Vadim Shikitov</Typography>
        <Button size='medium' color='secondary'>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

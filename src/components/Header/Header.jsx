import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import React from 'react';
import css from './Header.module.css'

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WroomTheCar
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={css.holder}></div>
    </>
  );
};

export default Header;

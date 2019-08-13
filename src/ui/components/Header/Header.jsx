import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styles from './Header.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Site Parser
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;

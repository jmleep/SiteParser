import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * A header that returns the name of the site
 */
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

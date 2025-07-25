import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CistosNet
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/analyze">
            Análise
          </Button>
          <Button color="inherit" component={Link} to="/documentation">
            Documentação
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
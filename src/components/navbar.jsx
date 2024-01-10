import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to='/'>
          <Button color="inherit">Home</Button>
          </Link>
          <Link to='products'>
          <Button color="inherit">Products</Button>
          </Link>
          <Link to='About'>
          <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,  } from 'react-router-dom';
import useAuth from './../../hooks/useAuth'

const Navigation = () => {

  const { user, logout } = useAuth();

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/appointment">  <Button
            style={{ textDecoration: 'none' }}
            variant="contained" text-decoration="none">Appointment</Button></Link>
          {
            user?.email ?
              <Link to="/login">
                <Button onClick={logout}
                  sx={{ textDecoration: 'none' }}
                  variant="contained">Logout</Button>
              </Link>
              :
              <Link to="/login"> <Button
              style={{ textDecoration: 'none' }}
                variant="contained">Login</Button></Link>
          }


        </Toolbar>
      </AppBar>
    </Box>

  );
};

export default Navigation;

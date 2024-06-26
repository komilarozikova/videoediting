import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Link, Menu, MenuItem, createTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const MButton = styled(NavLink)`
  padding: 20px;
  text-decoration: none;
  color: #2b2b2b;
`;


const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const Nav = styled(NavLink)({
  color: theme.palette.primary.main,
  textDecoration: 'none'
});

const drawerWidth = 240;


function Navbar(props) {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 320 },
      }}
    >
      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Divider />
        <List sx={{ pt: 5 }}>
          <Box sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <MButton to='/' sx={{ color: theme.palette.primary.main }} onClick={handleDrawerToggle}>Главная</MButton>
            <MButton to='/lessons' sx={{ color: theme.palette.primary.main }} onClick={ handleDrawerToggle}>Уроки</MButton>
            <MButton to='/contacts' sx={{ color: theme.palette.primary.main }} onClick={ handleDrawerToggle}>Контакты</MButton>
            <MButton
              sx={{ color: theme.palette.primary.main }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Nav>Наборы для монтажа</Nav>
            </MButton>
            <Menu
              sx={{
                '& .MuiPaper-root': {
                  paddingRight: '70px',
                  paddingLeft: '10px',
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                },
                '& .MuiTypography-root': {
                  textDecoration: 'none',
                  color: theme.palette.primary.main
                },
                '& .MuiTypography-root::after': {
                  content: '""',
                  display: 'block',
                  visibility: 'hidden',
                  position: 'absolute',
                  right: 0,
                  bottom: '-2px',
                  left: 0,
                  height: '1px',
                  transform: 'scaleX(0) translate(0, 0)',
                  transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  backgroundColor: '#000',
                  borderBottom: '1px solid #000'
                },
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}><Nav to='/footage'>Футажи</Nav></MenuItem>
              <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}><Nav to='/zvuk'>Звуки</Nav></MenuItem>
              <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}><Nav to='/luts'>LUTs</Nav></MenuItem>
              <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}><Nav to='/'>FULL PACK</Nav></MenuItem>
            </Menu>
          </Box>
        </List>

      </Box>
    </Drawer>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{
          display: 'flex', justifyContent: {
            xs: 'end', sm: 'center'
          }, backgroundColor: '#f7f7f7', p: '24px'
        }}>
          <Box component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: theme.palette.primary.main }}>
              <Nav to="/">Главная</Nav>
            </Button>
            <Button
              sx={{ color: theme.palette.primary.main }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Nav>Наборы для монтажа</Nav>
            </Button>
          </Box>

          <Menu
            sx={{

              '& .MuiPaper-root': {
                paddingRight: '70px',
                paddingLeft: '10px',
                background: '#f7f7f7',
                borderRadius: '8px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                left: '72px',
              },
              '& .MuiTypography-root': {
                textDecoration: 'none',
                color: theme.palette.primary.main
              },
              '& .MuiTypography-root::after': {
                content: '""',
                display: 'block',
                visibility: 'hidden',
                position: 'absolute',
                right: 0,
                bottom: '-2px',
                left: 0,
                height: '1px',
                transform: 'scaleX(0) translate(0, 0)',
                transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                backgroundColor: '#000',
                borderBottom: '1px solid #000'
              },
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Nav to='/footage'>Футажи</Nav></MenuItem>
            <MenuItem onClick={handleClose}><Nav to='/zvuk'>Звуки</Nav></MenuItem>
            <MenuItem onClick={handleClose}><Nav to='/luts'>LUTs</Nav></MenuItem>
            <MenuItem onClick={handleClose}><Nav to='/'>FULL PACK</Nav></MenuItem>
          </Menu>

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.primary.main }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button sx={{ color: theme.palette.primary.main }}>
              <Nav to='/lessons'> Уроки</Nav>
            </Button>

            <Button sx={{ color: theme.palette.primary.main }}>
              <Nav to='contacts'> Контакты</Nav>
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;

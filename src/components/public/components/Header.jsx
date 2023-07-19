import React, { Component, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import imageDr from '../../../assets/images/doctor1.jpg'

export default function Header() {

  // NOMBRE DEL USUARIO
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () =>{
      setW(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);

    };
  }, []);

  const Responsive = styled('div')(({theme}) => ({
    [theme.breakpoints.down('mobile')]:{
      color:grey
    },
    [theme.breakpoints.down('table')]:{
      color:grey
    },
    [theme.breakpoints.down('desktop')]:{
      color:grey
    }
  }))
  


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Responsive>
      <Box
        id='Header'  
        sx={{ 
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-between',
            width: {w},
            height: 80,
            backgroundColor: '#1f3c59'
          }}>
        {/* Consumir directo el nobre del hospital */}
          {/* Icono de CMA */}

        <Typography variant="h6" color='white' gutterBottom sx={{ minWidth: 200, marginTop: 2, marginLeft: 30}}>
           Centro médico de las Américas
        </Typography>


        <Tooltip title="Opciones">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{minWidth: 20}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50, marginRight: 5}} src={imageDr}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 40,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 60,
              width: 15,
              height: 15,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src={imageDr}/> Perfil
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Agregar otra cuenta
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Opciones
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </Responsive>
  );
}
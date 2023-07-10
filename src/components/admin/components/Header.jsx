import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import imageDr from '../../../assets/images/doctor1.jpg'
import Link from '@mui/joy/Link';
import { redirect } from 'react-router-dom';



export default function Header() {

  // NOMBRE DEL USUARIO
  const nombreUsuario = 'a Zector';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleLogOut = () => {


  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', minHeight: 80, maxHeight: 80, width: '100%', backgroundColor: '#1f3c59', }}>
        <Typography sx={{ minWidth: 200 }}></Typography>

        <Typography variant="h4" color='white' gutterBottom sx={{ minWidth: 200, marginTop: 2 }}>
          Bienvenido {nombreUsuario}
        </Typography>

        <Tooltip title="Opciones">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ minWidth: 20 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50, marginRight: 5 }} src={imageDr}></Avatar>
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
          <Avatar src={imageDr} /> Perfil
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Agregar otra cuenta
        </MenuItem> */}
        <MenuItem >
          <Link
            href="homeAdmin"
            underline="none"

            color="neutral"
            level=''
            sx={{ '--Link-gap': '0.5rem', pr: 0, pl: 0 }}
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Opciones
          </Link>
        </MenuItem>
        <MenuItem >
          <Link
            href="login"
            underline="none"

            color="neutral"
            level=''
            sx={{ '--Link-gap': '0.5rem', pr: 0, pl: 0 }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Salir
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
import * as React from 'react';
// CSS

// REACT MUI MATERIAL
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/ListOutlined';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
// PRIME REACT
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { OrderList } from 'primereact/orderlist';
// Imagenes de prueba/ejemplo
import ImgDr1 from '../../../assets/images/doctor1.jpg';
import ImgDr2 from '../../../assets/images/doctor2.jpg';
import ImgDr3 from '../../../assets/images/doctor3.png';
import ImgDr4 from '../../../assets/images/doctor4.jpg';
import ImgDr5 from '../../../assets/images/doctor5.jpg';
import ImgDr6 from '../../../assets/images/doctor6.jpg';

function createData(imagen, nombre, id, correo, telefono, especialidad, hub, url, vista, mas) {
  return {
    imagen,
    nombre,
    id,
    correo,
    telefono,
    especialidad,
    // hub,
    // url,
    // vista,
    // mas
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell align="center" >
        {row.imagen}
      </TableCell>
      {/* <TableCell align="center" >
        
          <Button type="button" label={ 'Dr: ' + row.nombre} icon={row.imagen} className="p-button-secondary p-button-text" badge="8" badgeClassName="p-badge-alert"/>
        </TableCell> */}
      <TableCell align="center" >{row.nombre}</TableCell>

      <TableCell align="center" >{row.id}</TableCell>
      <TableCell align="center">{row.correo}</TableCell>
      <TableCell align="center">{row.telefono}</TableCell>
      <TableCell align="center">{row.especialidad}</TableCell>
      <TableCell align="center">
        <Tooltip title="Opciones">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ minWidth: 20 }}
            aria-controls={opened ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={opened ? 'true' : undefined}
          >
            <ListIcon></ListIcon>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={opened}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 10,
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
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Editar
          </MenuItem>
          <Divider />

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Suspender
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Eliminar
          </MenuItem>

        </Menu>       
      </TableCell>

    </TableRow>

    /* <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Vista del Hub</TableCell>
                  <TableCell align="center">Url</TableCell>
                  <TableCell align="center">Visualizar pantalla</TableCell>
                  <TableCell align="center">Mas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                OPCIONES CRUD PARA CADA ID EN TABLA
                
                  <TableRow>


                    <TableCell  scope="row" align="center">
                      <Button type="button" label={row.nombre} icon={row.imagen} className="p-button-raised p-button-secondary p-button-text"  badgeClassName="p-badge-danger" />
                    </TableCell>

                    <TableCell  scope="row" align="center">
                      <InputText id="inputgroup" type="text" value={'http://zector/doctores/'+ row.nombre} />
                    </TableCell>
 
                    <TableCell scope="row" align="center">
                      <Button label='Ir a pantalla' className="p-button-raised p-button-rounded"/> 
                    </TableCell>
                      
                    <TableCell scope="row" align="center">
                      <ListIcon></ListIcon>
                    </TableCell>
                  </TableRow>
                
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow> */

  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     opciones: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Alberto', 'ADF5431N54SFS1', 'usuarioZector@zector.com', 9991521, 'Cirujano'),
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Marcos', '231AD3F13B3A5J', 'usuarioZector@zector.com', 32165446, 'Anestesiologo'),
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Maria', 'S5F4GN65S4FG6N', 'usuarioZector@zector.com', 5654556, 'Dentista'),
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Javier', 'G65A46354A3D55', 'usuarioZector@zector.com', 5654556, 'Quiropractico'),
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Raquel', 'G54ERG654A65GR', 'usuarioZector@zector.com', 5654556, 'Oculista'),
  createData(<Avatar sx={{ width: 50, height: 50, marginLeft: 1 }}></Avatar>, 'Leonel', '16R5G6A54G645A', 'usuarioZector@zector.com', 5654556, 'Medico')

];


// imagen, nombre, correo, telefono, especialidad, area 
export default function DataTable() {





  return (
    <TableContainer sx={{
      width: '100%',

      flexShrink: 10,
      [`& .MuiDrawer-paper`]: { minWidth: 500, maxWidth: 500, boxSizing: 'border-box', marginTop: '80px', },
    }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Foto</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Correo</TableCell>
            <TableCell align="center">Telefono</TableCell>
            <TableCell align="center">Especialidad</TableCell>
            <TableCell align="center">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}

// OTRAS FUNCIONALIDADES
{/* Funcion de desplegar lista */ }
{/* <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
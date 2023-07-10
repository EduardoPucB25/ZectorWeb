import React, { Component, useState } from 'react';
// IMPORTS PARA TABLAS
// REACT MUI MATERIAL
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/ListOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

// Import de poper
import ButtonGroup from '@mui/material/ButtonGroup';

// PRIME REACT
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { PrimeIcons } from 'primereact/api';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { SelectList } from '../components/SelectList';
import { InputTextarea } from 'primereact/inputtextarea';

// ICONS MODULES
// PERSONAL
import PersonalIcon from '@mui/icons-material/AssignmentInd';
// AREAS
import AreasIcon from '@mui/icons-material/MedicalServices';
// HUBS
import HubsIcon from '@mui/icons-material/Article';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// COMPONENTES INDIVIDUALES
import Tables from '../components/Tables';

// import GridFormEditarPersonal from '../components/GridFormEditarPersonal';
import GridFormPersonal from '../components/GridFormPersonal';
import { PanelMenuAdmin } from '../components/PanelMenu';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { ToolbarTable } from '../components/ToolbarTable';
import { DataTableCrud } from '../components/TableCrud'
import LogoZector from '../../../assets/images/LogoZector.png'
import LogoHospital from '../../../assets/images/Hospital.jpg'
// import { FormAdd } from '../../admin/layout/FormAdd'
// Imagenes de prueba/ejemplo
import ImgDr1 from '../../../assets/images/doctor1.jpg';
import ImgDr2 from '../../../assets/images/doctor2.jpg';
import ImgDr3 from '../../../assets/images/doctor3.png';
import ImgDr4 from '../../../assets/images/doctor4.jpg';
import ImgDr5 from '../../../assets/images/doctor5.jpg';
import ImgDr6 from '../../../assets/images/doctor6.jpg';
// ICONS
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import AddCardIcon from '@mui/icons-material/AddCard';
import { render } from 'react-dom';

function TableZ(props) {
  const tables = props.table;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = () => {

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {tables.map((row) => (<Row key={row.id} row={row} />))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

function GridFormEditarPersonal() {
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 600,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        {/* CONTENEDOR MAYOR DE FORMULARIO */}
        <Grid item sm sx={12} container>
          <Grid item sm container direction="column" sx spacing={1}>

            {/* SECCION 1 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid item sm xs={12} container>
                  {/* FORMULARIO DE PERSONAL */}
                  <Grid item sm container direction="column" sx spacing={2}>

                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'center' }}>
                        Datos de doctor
                      </Typography>
                    </Grid>

                    <Grid item sm direction="row" container spacing={4}>
                      <Grid item>
                        <Avatar alt="complex" src={ImgDr1} sx={{ height: 60, width: 60 }} />
                      </Grid>

                      {/* Editar el label del selector de imagen  */}
                      <Grid item>
                        <FileUpload name="demo" url="./upload" mode="basic" label='Seleccionar Imagen' chooseLabel="Seleccionar Imagen" />
                      </Grid>
                    </Grid>

                    {/* Imagen */}
                    <Grid item >
                      <Grid className="p-float-label">
                        <InputText id="inputtext" style={{ width: '100%', borderRadius: 15 }} />
                        <label htmlFor="inputtext">Nombre</label>
                      </Grid>
                    </Grid>

                    <Grid item xs>
                      <Grid className="p-float-label">
                        <InputText id="inputtext" style={{ width: '100%', borderRadius: 15 }} />
                        <label htmlFor="inputtext">Apellidos</label>
                      </Grid>
                    </Grid>

                    {/* INPUT ESPECIALIDAD Y CEDULA */}
                    <Grid item xs container direction="row" spacing={2} >
                      <Grid item>
                        <SelectList option={'especialidad'} />
                      </Grid>
                      <Grid item xs>
                        <Grid className="p-float-label" >
                          <InputText id="inputtext" style={{ width: '100%', borderRadius: 15 }} />
                          <label htmlFor="inputtext">Cedula</label>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs >

                      <Grid item>
                        <Grid className="p-float-label">
                          <InputTextarea id="textarea" rows={4} style={{ width: '100%', borderRadius: 15 }} />
                          <label htmlFor="textarea">Sobre mí...</label>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* BOTON DE AGREGAR OTRA ESPECIALIDAD Y CEDULA*/}

                    {/* TEXTO SOBRE MI */}

                    {/* APARTADO CONSULTORIO */}
                    {/* --CONSULTORIO TEXT / SELECT */}
                    {/* HORARIOS */}

                    {/* APARTADO CONTACTO */}
                    {/* TELEFONO
                             CORREO
                             WHATSAPP */}

                    {/* SECCION 2  REDES SOCIALES */}
                    {/* LINKS */}
                    {/* PAG WEB
                             INSTAGRAM
                             FACEBOOK
                             PERSONALIZADO
                                INPUT TXT NOMBRE / LINK */}

                    {/* SECCION 3  SERVICIOS*/}
                    {/* INP TXT ESPECIALISTA EN..
                             AGREGAR OTRO */}
                    {/* INP TXT ENFERMEDADES TRATADAS..
                             AGREGAR OTRO */}

                    {/* SECCION 4  ACADEMICOS */}


                    {/* AQUI TERMINA FORMULARIO */}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 1 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sm container direction="column" sx spacing={2}>
                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'left' }}>
                        Consultorio
                      </Typography>
                    </Grid>
                    <Grid item sm>

                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 2 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sm container direction="column" sx spacing={2}>
                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'left' }}>
                        Contacto
                      </Typography>
                    </Grid>
                    <Grid item sm>

                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 3 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sm container direction="column" sx spacing={2}>
                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'left' }}>
                        Links
                      </Typography>
                    </Grid>
                    <Grid item sm>

                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 4 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sm container direction="column" sx spacing={2}>
                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'left' }}>
                        Servicios
                      </Typography>
                    </Grid>
                    <Grid item sm>

                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div >
  );
}


function Row(props) {
  const { row } = props;
  const [editarPersonal, verEditarPersonal] = useState(false);
  const [perfilPersonal, verPerfilPersonal] = useState(false);
  const [personalDinamico, verPersonalDinamico] = useState(false);


  const footerContent = (
    <div>
      <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Guardar Cambios" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  const [opciones, setOpciones] = React.useState(null);
  const [visualizar, setVisualizar] = React.useState(null);

  const openedOpciones = Boolean(opciones);
  const openedVer = Boolean(visualizar);


  const handleClickOpciones = (event) => {
    setOpciones(event.currentTarget);
  };
  const handleClickVer = (event) => {
    setVisualizar(event.currentTarget);

  };
  const handleClose = () => {
    setOpciones(null);
    setVisualizar(null);

  };

  const footerEditarPersonal = (
    <div>
      <Button label="Cancelar" icon="pi pi-times" onClick={() => verEditarPersonal(false)} className="p-button-warning" />
      <Button label="Enviar" icon="pi pi-check" onClick={() => verEditarPersonal(false)} autoFocus className='p-button-success' />
    </div>
  );
  const footerPerfilPersonal = (
    <div>
      <Button label="Cancelar" icon="pi pi-times" onClick={() => verPerfilPersonal(false)} className="p-button-warning" />
      <Button label="Enviar" icon="pi pi-check" onClick={() => verPerfilPersonal(false)} autoFocus className='p-button-success' />
    </div>
  );
  const footerPersonalDinamico = (
    <div>
      <Button label="Cancelar" icon="pi pi-times" onClick={() => verPerfilPersonal(false)} className="p-button-warning" />
      <Button label="Enviar" icon="pi pi-check" onClick={() => verPerfilPersonal(false)} autoFocus className='p-button-success' />
    </div>
  );


  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell align="center" >
        {row.imagen}
      </TableCell>
      <TableCell align="center" >{row.nombre}</TableCell>
      <TableCell align="center" >{row.id}</TableCell>
      <TableCell align="center">{row.correo}</TableCell>
      <TableCell align="center">{row.telefono}</TableCell>
      <TableCell align="center">{row.especialidad}</TableCell>
      <TableCell align="center">
        <Tooltip title="Ver">
          <IconButton
            onClick={handleClickVer}
            size="small"
            sx={{ minWidth: 20 }}
            aria-controls={openedVer ? 'ver-personal' : undefined}
            aria-haspopup="true"
            aria-expanded={openedVer ? 'true' : undefined}
          >
            <i className="pi pi-eye" style={{ 'fontSize': '1.3em' }}></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Opciones">
          <IconButton
            onClick={handleClickOpciones}
            size="small"
            sx={{ minWidth: 20 }}
            aria-controls={openedOpciones ? 'opciones-personal' : undefined}
            aria-haspopup="true"
            aria-expanded={openedOpciones ? 'true' : undefined}
          >
            <ListIcon />
          </IconButton>
        </Tooltip>
      </TableCell>

      <Menu
        anchorEl={visualizar}
        id="ver-personal"
        open={openedVer}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 95,
              right: -5,
              width: 20,
              height: 20,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'center' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem onClick={() => verEditarPersonal(true)}>
          <ListItemIcon>
            <ModeEditIcon fontSize="small" />
          </ListItemIcon>
          Ver Perfil
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AutoDeleteIcon fontSize="small" />
          </ListItemIcon>
          Editar y Visualizar
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Eliminar
        </MenuItem>
      </Menu>


      <Menu
        anchorEl={opciones}
        id="opciones-personal"
        open={openedOpciones}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 95,
              right: -5,
              width: 20,
              height: 20,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'center' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem onClick={() => verEditarPersonal(true)}>
          <ListItemIcon>
            <ModeEditIcon fontSize="small" />
          </ListItemIcon>
          Editar
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AutoDeleteIcon fontSize="small" />
          </ListItemIcon>
          Suspender
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Eliminar
        </MenuItem>
      </Menu>


      {/* DIALOGS */}

      <Dialog visible={editarPersonal} onHide={() => verEditarPersonal(false)} footer={footerEditarPersonal}>
        <GridFormEditarPersonal />
      </Dialog>
      <Dialog visible={perfilPersonal} onHide={() => verPerfilPersonal(false)} footer={footerPerfilPersonal}>
        <GridFormEditarPersonal />
      </Dialog>

      <Dialog visible={personalDinamico} onHide={() => verPersonalDinamico(false)} footer={footerPersonalDinamico}>
        <GridFormEditarPersonal />
      </Dialog>
    </TableRow>

  );
}




function Module(props) {
  const module = props.module;

  return (
    <div>
      {module.map((categoria) => (
        <Box >
          <Button label={categoria.nombre} icon={categoria.icon} key={categoria.id} rounded text severity="secondary" aria-label="User" />
        </Box>
      ))}
      <Box >
        <Button label="Agregar" icon={PrimeIcons.PLUS} rounded text severity="info" aria-label="User" />
      </Box>

    </div>
  );
}




// class SelectForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedEspecialidad: null

//     };

//     especialidad = [
//       { name: 'Nutrición' },
//       { name: 'Neurologia' },
//       { name: 'Cirugia General' },
//       { name: 'Cardiología' },
//       { name: 'Especialidad' }
//     ];


//     onEspecialidadChange = onEspecialidadChange(data);

//   };

//   onEspecialidadChange(e) {
//     setState({ selectedEspecialidad: e.value });
//   }

//   render() {
//     return (
//       <div className="dropdown-demo">
//         <div className="card">
//           <Dropdown value={state.selectedEspecialidad} options={especialidad} onChange={this.onEspecialidadChange} optionLabel="name" filter showClear filterBy="name" placeholder="Especialidad" />
//         </div>
//       </div>
//     );
//   }
// }

function createData(imagen, nombre, id, correo, telefono, especialidad) {
  return {
    imagen,
    nombre,
    id,
    correo,
    telefono,
    especialidad,
  };
}


const rowsDoctores = [
  createData(<Avatar src={ImgDr1} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', '4H65W4T4H64SDTRH6', 'usuarioMedico@zector.com', 9991521, 'Medico'),
  createData(<Avatar src={ImgDr2} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Maria', '51G651A15G6R1', 'usuarioMedico@zector.com', 32165446, 'Medico'),
  createData(<Avatar src={ImgDr3} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Hernesto', '1A5RG1A15R1G61A', 'usuarioMedico@zector.com', 5654556, 'Medico'),
  createData(<Avatar src={ImgDr4} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Sandra', 'AD5G415A6D66', 'usuarioMedico@zector.com', 32168451, 'Medico'),
  createData(<Avatar src={ImgDr5} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Gustavo', 'ADR12GB65A1D', 'usuarioMedico@zector.com', 1684695, 'Medico'),
  createData(<Avatar src={ImgDr6} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', 'ADF6651651A5', 'usuarioMedico@zector.com', 9991521, 'Medico'),
];

const rowsEnfermeras = [
  // createData(<Avatar src={ImgDr1} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', 'ADF5431N54SFS1', 'usuarioCirujano@zector.com', 9991521, 'Cirujano'),
  createData(<Avatar src={ImgDr2} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Maria', '231AD3F13B3A5J', 'usuarioCirujano@zector.com', 32165446, 'Cirujano'),
  // createData(<Avatar src={ImgDr3} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', 'W45W4GB4S', 'usuarioCirujano@zector.com', 5654556, 'Cirujano'),
  createData(<Avatar src={ImgDr4} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Sandra', 'BD62D6FB16A5D1F', 'usuarioCirujano@zector.com', 32168451, 'Cirujano'),
  // createData(<Avatar src={ImgDr5} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Gustavo', 'S5F4GN65S4FG6N', 'usuarioCirujano@zector.com', 1684695, 'Cirujano'),
  // createData(<Avatar src={ImgDr6} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', '1SAF56BS65D16B1S', 'usuarioCirujano@zector.com', 9991521, 'Cirujano'),
];

const rowsAdministrativos = [
  // createData(<Avatar src={ImgDr1} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', 'ADF5431N54SFS1', 'usuarioCirujano@zector.com', 9991521, 'Cirujano'),
  createData(<Avatar src={ImgDr2} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Maria', '231AD3F13B3A5J', 'usuarioCirujano@zector.com', 32165446, 'Cirujano'),
  createData(<Avatar src={ImgDr3} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', 'W45W4GB4S', 'usuarioCirujano@zector.com', 5654556, 'Cirujano'),
  createData(<Avatar src={ImgDr4} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Sandra', 'BD62D6FB16A5D1F', 'usuarioCirujano@zector.com', 32168451, 'Cirujano'),
  // createData(<Avatar src={ImgDr5} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Gustavo', 'S5F4GN65S4FG6N', 'usuarioCirujano@zector.com', 1684695, 'Cirujano'),
  // createData(<Avatar src={ImgDr6} sx={{ width: 60, height: 60, marginLeft: 1 }}></Avatar>, 'Alberto', '1SAF56BS65D16B1S', 'usuarioCirujano@zector.com', 9991521, 'Cirujano'),
];

const modulePersonal = [
  createPersonal('Doctores', rowsDoctores, '1V51A561FV65A6',),
  createPersonal('Enfermeras', rowsEnfermeras, 'ADF54A65DFB'),
  createPersonal('Administrativos', rowsAdministrativos, '5BD5F8B5'),

  // createTable('Anestesiologo', )
];

function createPersonal(nombre, contenido, id) {
  return {
    nombre,
    contenido,
    id,
    icon: 'pi pi-users'
  };
}

function createDepartamento(nombre, numeroDepartamento, id, encargado) {
  return {
    nombre,
    numeroDepartamento,
    id,
    encargado
  };
}

const rowsBancodeSangre = [
  createDepartamento('Departamento1', 1, 'SV4ASD544', 'Maria'),
  createDepartamento('Departamento2', 2, 'DFS41B56S', 'Alberto'),
  createDepartamento('Departamento3', 3, 'DSFB5DF65', 'Hernesto'),
  createDepartamento('Departamento4', 4, 'BDSF26DFB', 'Sandra'),
  createDepartamento('Departamento5', 5, '651DB61F5', 'Gustavo'),
  createDepartamento('Departamento6', 6, '62FDB62DS', 'Montse'),

];

const rowsAreaComun = [
  createDepartamento('Cuarto', 1, 'SD65SDV65A', 'Maria'),
  createDepartamento('Cuarto', 2, '1VSD56156V', 'Alberto'),
  createDepartamento('Cuarto', 3, '5161V651AV', 'Hernesto'),
  createDepartamento('Cuarto', 4, 'BDSF8426DB', 'Sandra'),
  createDepartamento('Cuarto', 5, '1V65A1SDV65', 'Gustavo'),
  createDepartamento('Cuarto', 6, '51FV61ADA5A', 'Montse'),
];

// Staff Asociados

const moduleAreas = [
  createAreas('Camas de hospital', rowsAreaComun, 30),
  createAreas('Banco de Sagre', rowsBancodeSangre, 15),
  createAreas('Area Común', rowsAreaComun, 20),
  createAreas('Laboratorio', rowsAreaComun, 30),

];

function createAreas(nombre, contenido, departamentos) {
  return {
    nombre,
    contenido,
    departamentos,
    icon: 'pi pi-slack'
  };
}

const modules = [
  createModules('Personal', 'pi pi-users', modulePersonal, 'GN51SN6GFN5'),
  createModules('Zonas', 'pi pi-users', moduleAreas, 'G545S4F5NS4'),
  createModules('Areas', 'pi pi-users', moduleAreas, 'G545S4F5NS4'),

  // createTable('Anestesiologo', )
];

function createModules(nombre, icon, contenido, id) {
  return {
    nombre,
    icon,
    contenido,
    id
  };
}

export default class homeAdmin extends Component {


  constructor(props) {
    super(props);
    this.state = {

      displayAgregarDoctores: false,
      displayAgregarEnfermeras: false,
      displayAgregarAdministrativos: false,

      position: 'center'
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);

  }

  renderVisible(name){
    this.setState({
      [`${name}`]: true
    });
    
  }

  onClick(name, position) {
    let state = {
      [`${name}`]: true
    };

    if (position) {
      state = {
        ...state,
        position
      }
    }

    this.setState(state);
  }

  onHide(name) {
    this.setState({
      [`${name}`]: false
    });
  }

  renderFooter(name) {
    return (
      <div>
        <Button label="Cancelar" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-warning" />
        <Button label="Enviar" icon="pi pi-check" onClick={() => this.onHide(name)} autoFocus className='p-button-success' />
      </div>
    );
  }

  
  // -----------------------------------




  render() {

    return (
      <Box sx={{ display: 'flex', }}>
        <Box
          variant="permanent"
          sx={{
            minWidth: 200,
            maxWidth: 200,
            backgroundColor: '',
            flexShrink: 1,
            [`& .MuiDrawer-paper`]: { minWidth: 200, maxWidth: 200, boxSizing: 'border-box' },
          }}
        >

          <Box sx={{ maxWidth: 200, minWidth: 200, textAlign: 'center', alignItems: 'center' }}>
            {/* IMAGEN HOSPITAL */}
            <Avatar sx={{ width: 100, height: 100, marginTop: 3, marginLeft: 6, marginBottom: 2 }} src={LogoHospital}></Avatar>
            {/* NOMBRE HOSPITAL */}
            <Typography variant="h6" gutterBottom sx={{ minWidth: 200, marginTop: 1, padding: 1 }}>
              Centro Médico de las Américas
            </Typography>
          </Box>

          {/* <Modules/> */}
          <Box >
            <div className="card flex justify-content-center">
              {/* <PanelMenu model={modules} style={{ width: '200px' }} /> */}
              <div className="card">
                <Accordion multiple >
                  {modules.map((modules) => (
                    <AccordionTab header={modules.nombre}>
                      <Module key={modules.id} module={modules.contenido} />
                    </AccordionTab>
                  ))}
                </Accordion>
                <Box>
                  <Button label='Agregar Módulo' icon={PrimeIcons.PLUS} rounded text severity="info" aria-label="User" />
                </Box>
              </div>
            </div>
          </Box>
        </Box>

        <Box component="main" sx={{ flexGrow: 2, p: 2 }}>
          {/* Mapeo de tablas */}
          {modulePersonal.map((table) => (
              
            <Box>
              {/* <ToolbarTable /> */}
              <TableContainer sx={{
                width: '100%',
                flexShrink: 10,
                [`& .MuiDrawer-paper`]: { minWidth: 500, maxWidth: 500, boxSizing: 'border-box', marginTop: '80px', },
              }}>

                <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1 }}>
                  {table.nombre}
                </Typography>
                <Box>
                  <TableContainer sx={{
                    width: '100%',
                    flexShrink: 10,
                    [`& .MuiDrawer-paper`]: { minWidth: 550, maxWidth: 550, boxSizing: 'border-box', marginTop: '80px', },
                  }}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow>

                          {/* Boton de agregar nuevo personal */}
                          <TableCell align="left">

                            <div style={{ alignItems: 'center' }}>
                              <Button label={"Agregar " + table.nombre} rounded icon="pi pi-plus" className="p-mr-2" onClick={() => this.onClick(`displayAgregar${table.nombre}`)} />

                              <Dialog header={"Agregar " + table.nombre} visible={this.state.displayAgregarDoctores}  footer={this.renderFooter('displayAgregarDoctores')} onHide={() => this.onHide('displayAgregarDoctores')}>
                              
                                <GridFormEditarPersonal />

                              </Dialog>
                              {/* <Dialog header={"Agregar " + table.nombre} visible={this.state.displayAgregarEnfermeras}  footer={this.renderFooter(`displayAgregar${table.nombre}`)} onHide={() => this.onHide(`displayAgregarEnfermeras`)}>
                          
                                <GridFormEditarPersonal />

                              </Dialog>
                              <Dialog header={"Agregar " + table.nombre} visible={this.state.displayAgregarAdministrativos} footer={this.renderFooter(`displayAgregar${table.nombre}`)} onHide={() => this.onHide(`displayAgregarAdministrativos`)}>
                       
                                <GridFormEditarPersonal />

                              </Dialog> */}

                            </div>

                          </TableCell>

                          <TableCell align="right">
                            <span className="p-input-icon-left">
                              <i className="pi pi-search" />
                              <InputText placeholder="Search" />
                            </span>
                            <Button icon="pi pi-search" className="p-mr-2" />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>

                  </TableContainer>
                </Box>
                <TableZ key={table.id} table={table.contenido} />
              </TableContainer>
            </Box>
          ))}
          {/* <DataTableCrud></DataTableCrud> */}
        </Box>
      </Box>
    );
  }
}
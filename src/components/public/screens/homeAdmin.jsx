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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Import de poper


// PRIME REACT
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { PrimeIcons } from 'primereact/api';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { SelectList } from '../components/SelectList';
import { InputTextarea } from 'primereact/inputtextarea';
import { ListBox } from 'primereact/listbox';

// ICONS MODULES
// PERSONAL
import ImgDr1 from '../../../assets/images/doctor1.jpg';
import ImgDr2 from '../../../assets/images/doctor2.jpg';
import ImgDr3 from '../../../assets/images/doctor3.png';
import ImgDr4 from '../../../assets/images/doctor4.jpg';
import ImgDr5 from '../../../assets/images/doctor5.jpg';
import ImgDr6 from '../../../assets/images/doctor6.jpg';
// ICONS

function TablePersonal(props) {
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

  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [selectedConsultorio, setSelectedConsultorio] = useState(null);
  const [selectedHorarios, setSelectedHorarios] = useState(null);



  const especialidad = [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' }
  ];

  const consultorio = []
  for (let index = 1; index < 151; index++) {
    consultorio.push({ name: ` Consultorio ${index}` })

  }

  const piso = []
  for (let a = 1; a < 9; a++) {
    for (let b = 1; b < 10; b++) {
      piso.push({ name: `Piso ${a}  consultorio ${b}` })
    }
  }

  const horarios = [{ name: '24 Horas' }];
  for (let index = 1; index < 13; index++) {
    horarios.push({ name: `${index}:00am ` })

  }
  for (let index = 13; index < 23; index++) {
    horarios.push({ name: `${index}:00pm` })

  }

  return (
    <div>
      <Paper
        sx={{
          p: 1,
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
                  p: 1,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid item sm xs={12} container>
                  {/* FORMULARIO DE PERSONAL */}
                  <Grid item sm container direction="column" spacing={2}>

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
                        {/* <SelectList option={'especialidad'} /> */}
                        <Dropdown value={selectedEspecialidad} filter showClear onChange={(e) => setSelectedEspecialidad(e.value)} options={especialidad} optionLabel="name" placeholder="Seleccione Especialidad" style={{ borderRadius: 15 }} />
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
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 1 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 1,
                  margin: 'auto',
                  maxWidth: 630,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sm container direction="column" spacing={2}>
                    <Grid item sm>
                      <Typography variant="h5" gutterBottom sx={{ minWidth: 200, marginTop: 1, textAlign: 'left' }}>
                        Consultorio
                      </Typography>
                    </Grid>
                    <Grid item sm>



                    </Grid>
                    <Grid item xs container direction="row" spacing={1} >
                      <Grid item xs>
                        <Button
                          raised
                          text
                          outlined
                          rounded
                          disabled
                          severity='secondary'
                          label='  Consultorio  '
                        >
                        </Button>
                      </Grid>
                      <Grid item xs>
                        <Dropdown value={selectedConsultorio} filter showClear onChange={(e) => setSelectedConsultorio(e.value)} options={consultorio} optionLabel="name" placeholder="Seleccione Consultorio" style={{ borderRadius: 15 }} />
                      </Grid>
                    </Grid>

                    <Grid item xs container direction="row" spacing={1} >
                      <Grid item xs>
                        <Button
                          raised
                          text
                          outlined
                          rounded
                          disabled
                          severity='secondary'
                          label='  Horarios  '
                        >
                        </Button>
                      </Grid>
                      <Grid item xs>
                        <Dropdown value={selectedHorarios} filter showClear onChange={(e) => setSelectedHorarios(e.value)} options={horarios} optionLabel="name" placeholder="Seleccione Horario" style={{ borderRadius: 15 }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 2 DE FORMULARIO */}
            <Grid item>
              <Paper
                sx={{
                  p: 1,
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

                    <Grid item xs container direction="row" spacing={1} >
                      <Grid item xs>
                        <Button
                          raised
                          text
                          outlined
                          rounded
                          disabled
                          severity='secondary'
                          label='  Telefono  '
                        >
                        </Button>
                      </Grid>
                      <Grid item xs>
                      </Grid>
                    </Grid>

                    <Grid item xs container direction="row" spacing={1} >
                      <Grid item xs>
                        <Button
                          raised
                          text
                          outlined
                          rounded
                          disabled
                          severity='secondary'
                          label='  Correo  '
                        >
                        </Button>
                      </Grid>
                      <Grid item xs>

                      </Grid>
                    </Grid>
                    <Grid item xs container direction="row" spacing={1} >
                      <Grid item xs>
                        <Button
                          raised
                          text
                          outlined
                          rounded
                          disabled
                          severity='secondary'
                          label='  WhatsApp  '
                        >
                        </Button>
                      </Grid>
                      <Grid item xs>

                      </Grid>
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




// function Module(props) {
//   return (

//     <div>
//       <Accordion multiple >
//           <AccordionTab header='hola' >
//             {/* <Button label={sub.nombre} icon={sub.icon} key={sub.id} rounded text severity="secondary" aria-label="User" /> */}
//           </AccordionTab>
//           <AccordionTab header='hola' >
//             {/* <Button label={sub.nombre} icon={sub.icon} key={sub.id} rounded text severity="secondary" aria-label="User" /> */}
//           </AccordionTab>
//           <AccordionTab header='hola' >
//             {/* <Button label={sub.nombre} icon={sub.icon} key={sub.id} rounded text severity="secondary" aria-label="User" /> */}
//           </AccordionTab>
//       </Accordion>


//       <Box >
//         <Button label="Agregar" icon={PrimeIcons.PLUS} rounded text severity="info" aria-label="User" />
//       </Box>
//     </div>
//   );
// }

function CategoryStaff(props) {
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  // const subCategory = props.category;
  const items = [];
  {
    categoryPersonal.map((staff) => {
      items.push({
        name: staff.nombre
      })
    })
  }
  return (
    <div>
      <ListBox value={selectedPersonal} onChange={(e) => setselectedPersonal(e.value)} options={items} optionLabel="name" className="w-full md:w-14rem" />
      <Box >
        <Button label="Agregar" icon={PrimeIcons.PLUS} rounded text severity="info" aria-label="User" />
      </Box>

    </div>
  );
}

// function SubCategory(props) {

//   const itemsModule = [];
//   const module =[];
//   const category = [];
//   const subCategory=[];


//     {modules.map((mod) =>{
//       itemsModule.push({
//         label: mod.nombre,
//         icon: mod.icon,
//       })
//     })}
//   return (
//     <div>
//       <PanelMenu model={itemsModule}/>

//     </div>
//   );
// }



// function Category(props) {

//   const itemsModule = [];


//   const catPersonal = [];
//   const catZonas=[];
//   const subCatAreas=[];

//   const module =[];  
//   const subCategory=[];
//   const category =[];

//   {}

//   {module.push(catPersonal)}
//   {categoryZonas.map((zonas) =>{
//     catZonas.push({
//       label: zonas.nombre,
//       icon: zonas.icon,

//     })
//   })}
//     {categoryPersonal.map((personal) =>{
//       catPersonal.push({
//         label: personal.nombre,
//         icon: personal.icon,

//       })
//     })}

//     {module.map((mod) =>{

//       itemsModule.push({
//         label: mod.nombre,
//         icon: mod.icon,

//       })
//     })}





//   return (
//     <div>
//       <PanelMenu model={itemsModule}/>

//     </div>
//   );
// }


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

const subCategoryAreas = [
  createSubCategory('Banco de Sangre', 'pi pi-users', rowsBancodeSangre, 'DFBAA15D6DBF'),
  createSubCategory('Areas Comunes', 'pi pi-users', rowsAreaComun, '1D5AFB65A1D56FB'),

];


const categoryPersonal = [
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

const categoryZonas = [
  createCategory('Camas hospital', 'pi pi-users', '', 30),
  createCategory('Consultorios', 'pi pi-users', 15),
  createCategory('Areas', 'pi pi-users', subCategoryAreas, 20),

];

const categoryBuzon = [
  createCategory('catBuzon1', 'pi pi-users', '', 30),
  createCategory('catBuzon1', 'pi pi-users', 15),
  createCategory('catBuzon1', 'pi pi-users', '', 20),

];

const categoryEncuesta = [
  createCategory('De satisfacción', '', 30),
  createCategory('Calidad', '', 15),
];
const categoryAnuncios = [
  createCategory('categoryAnuncios1', 'pi pi-users', '', 30),
  createCategory('categoryAnuncios2', 'pi pi-users', 15),
  createCategory('categoryAnuncios3', 'pi pi-users', '', 20),

];
const categoryBlog = [
  createCategory('categoryBlog1', 'pi pi-users', '', 30),
  createCategory('categoryBlog2', 'pi pi-users', 15),
  createCategory('categoryBlog3', 'pi pi-users', '', 20),

];
const modules = [
  createModules('Staff', 'pi pi-users', categoryPersonal, 'GN51SN6GFN5'),
  createModules('Zonas', 'pi pi-users', categoryZonas, 'G545S4F5NS4'),
  createModules('Buzon', 'pi pi-users', categoryBuzon, 'G545S4F5NS4'),
  createModules('Encuestas', 'pi pi-users', categoryEncuesta, 'BSDL5VV7JHV2 '),
  createModules('Anuncios', 'pi pi-users', categoryAnuncios, 'G545S4F5NS4'),
  createModules('Blog', 'pi pi-users', categoryBlog, 'G545S4F5NS4'),



  // createTable('Anestesiologo', )
];

function createSubCategory(nombre, icon, contenido, id) {
  return {
    nombre,
    icon,
    contenido,
    id
  };
}

function createCategory(nombre, icon, contenido, id) {
  return {
    nombre,
    icon,
    contenido,
    id
  };
}


function createModules(nombre, icon, contenido, id) {
  return {
    nombre,
    icon,
    contenido,
    id
  };
}

// function VisualDialogs(table) {

//   const nombre = table.nombre;
//   const [display, setdisplay] = useState(false);
//   const Footer = (name) => {
//     return (
//       <div>
//         <Button label="Cancelar" icon="pi pi-times" onClick={name = false} className="p-button-warning" />
//         <Button label="Enviar" icon="pi pi-check" onClick={name = false} autoFocus className='p-button-success' />
//       </div>
//     );
//   }

//   return(
//     <div>
//       <Button label={"Agregar " + nombre} rounded icon="pi pi-plus" className="p-mr-2" onClick={setdisplay(true)} />
//       <Dialog header={"Agregar" + nombre} visible={display}  footer={Footer(display)} onHide={ () => onHide(displayAgregarDoctores)}>
//       <GridFormEditarPersonal />
//       </Dialog>

//     </div>
//   )
// }

export default class homeAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {

      displayAgregarDoctores: false,
      displayAgregarEnfermeras: false,
      displayAgregarAdministrativos: false,



    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);

  }

  onClick(name) {
    let state = {
      [`${name}`]: true
    };


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



  render() {
    return (
      <Box sx={{ display: 'flex', }}>
        <Box
          variant="permanent"
          sx={{
            minWidth: 230,
            maxWidth: 230,

            backgroundColor: '',
            flexShrink: 1,
            [`& .MuiDrawer-paper`]: { minWidth: 200, maxWidth: 200, boxSizing: 'border-box' },
          }}
        >

          <Box sx={{ maxWidth: 200, minWidth: 200, textAlign: 'center', alignItems: 'center' }}>
            {/* <Avatar sx={{ width: 100, height: 100, marginTop: 3, marginLeft: 6, marginBottom: 2 }} src={LogoHospital}></Avatar> */}
            <Typography variant="h6" gutterBottom sx={{ minWidth: 200, marginTop: 1, padding: 1 }}>

            </Typography>
          </Box>


          <Box marginTop={5}>
            <div className="card flex justify-content-center">
              {/* <PanelMenu model={modules} style={{ width: '200px' }} /> */}
              <div className="card">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Staff</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Doctores
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      Enfermeras
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      Administrativos
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Zonas</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Camas Hospital
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      Consultorios
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Areas</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Banco de sangre
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          Areas comunes
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Buzon</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Buzon 1
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Encuestas</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Encuestas 1
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Anuncios</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Anuncios 1
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Blog</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Blog 1
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* <Accordion multiple contentEditable>
                  <AccordionSummary header='Staff'>
                    <Card >
                      <CardActionArea >
                          <Typography gutterBottom variant="h6" marginLeft={2}>
                            Doctores
                          </Typography>
                      </CardActionArea>
                    </Card>
                    <Card >
                      <CardActionArea >
                          <Typography gutterBottom variant="h6" marginLeft={2}>
                            Enfermeras
                          </Typography>
                      </CardActionArea>
                    </Card>
                    <Card >
                      <CardActionArea >
                          <Typography gutterBottom variant="h6" component="div" marginLeft={2}>
                            Administrativo
                          </Typography>
                      </CardActionArea>
                    </Card>

                  </AccordionSummary>
                  <AccordionSummary header='Zonas'>
                    <Card >
                      <CardActionArea >
                          <Typography gutterBottom variant="h6"  marginLeft={2}>
                          Camas Hospital
                          </Typography>
                      </CardActionArea>
                    </Card>
                    <Card >
                      <CardActionArea >
                          <Typography gutterBottom variant="h6"  marginLeft={2}>
                          Consultorios
                          </Typography>
                      </CardActionArea>
                    </Card>
                  <Accordion  >
                      <AccordionSummary header='Areas' >
                        <Card >
                          <CardActionArea >
                              <Typography gutterBottom variant="h6" component="div" marginLeft={2}>
                              Areas Comunes
                              </Typography>
                          </CardActionArea>
                        </Card>
                        <Card >
                          <CardActionArea >
                              <Typography gutterBottom variant="h6" component="div" marginLeft={2}>
                                Banco de Sangre
                              </Typography>
                          </CardActionArea>
                        </Card>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionSummary>
                  <AccordionSummary header='Buzón'>
                  <Accordion  >
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                    </Accordion>
                  </AccordionSummary>
                  <AccordionSummary header='Encuestas'>
                  <Accordion  >
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                    </Accordion>
                  </AccordionSummary>
                  <AccordionSummary header='Anuncios'>
                  <Accordion  >
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                    </Accordion>
                  </AccordionSummary>
                  <AccordionSummary header='Blog'>
                  <Accordion  >
                      <AccordionSummary header='hola' >
                      </AccordionSummary>
                    </Accordion>
                  </AccordionSummary>
                </Accordion> */}
                <Box margin={1}>
                  <Button label='Agregar Módulo' icon={PrimeIcons.PLUS} rounded text severity="info" aria-label="User" />
                </Box>
              </div>
            </div>
          </Box>
        </Box>

        <Box component="main" sx={{ flexGrow: 2, p: 2 }}>
          <Dialog header={"Agregar nuevo personal"} visible={this.state.displayAgregarDoctores} footer={this.renderFooter(`displayAgregarDoctores`)} onHide={() => this.onHide(`displayAgregarDoctores`)}>
            <GridFormEditarPersonal />
          </Dialog>
          <Dialog header={"Agregar nuevo personal"} visible={this.state.displayAgregarEnfermeras} footer={this.renderFooter(`displayAgregarEnfermeras`)} onHide={() => this.onHide(`displayAgregarEnfermeras`)}>
            <GridFormEditarPersonal />
          </Dialog>
          <Dialog header={"Agregar nuevo personal"} visible={this.state.displayAgregarAdministrativos} footer={this.renderFooter(`displayAgregarAdministrativos`)} onHide={() => this.onHide(`displayAgregarAdministrativos`)}>
            <GridFormEditarPersonal />
          </Dialog>
          {/* Mapeo de tablas */}
          {categoryPersonal.map((table) => (

            <Box key={table.id}>
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
                              <Button label={"Agregar "} rounded icon="pi pi-plus" className="p-mr-2" onClick={() => this.onClick(`displayAgregar${table.nombre}`)} />

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
                {/* Tablas Staff */}
                <TablePersonal key={table.id} table={table.contenido} />
              </TableContainer>
            </Box>
          ))}
          {/* <DataTableCrud></DataTableCrud> */}
        </Box>
      </Box>
    );
  }
}
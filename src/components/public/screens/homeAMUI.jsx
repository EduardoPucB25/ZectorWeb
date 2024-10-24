import React, { useState, useEffect, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { DataTable } from 'primereact/datatable';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import imageDr from '../../../assets/images/doctor1.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ICONS
import GroupIcon from '@mui/icons-material/Group';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StreamIcon from '@mui/icons-material/Stream';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

// TABLE CRUD COMPLETE
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
// import { StaffService } from '../../../services/StaffService';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';

import ImgDr1 from '../../../assets/images/doctor1.jpg';
import ImgDr2 from '../../../assets/images/doctor2.jpg';
import ImgDr3 from '../../../assets/images/doctor3.png';
import ImgDr4 from '../../../assets/images/doctor4.jpg';
import ImgDr5 from '../../../assets/images/doctor5.jpg';
import ImgDr6 from '../../../assets/images/doctor6.jpg';
import cmaLogo from '../../../assets/images/cmaLogo.png';
import cmaUser from '../../../assets/images/cmaUser.png';

// PETICIONES API
import { Global } from '../../../helpers/global'
import useAuth from '../../../hooks/useAuth';
import ItemCategoria from '../components/ItemCategoria';
import ItemTables from '../components/ItemTables';
import { PersonalService } from '../../../services/Personal.service';
import ItemTableZonas from '../components/ItemTables';
import TablePrueba from '../components/TablePrueba';



const drawerWidth = 320;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function HomeAdminMUI() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dataPersonal, setDataPersonal] = useState(null);
  const [modulos, setModulos] = useState([])
 
  // TRAER TODOS LOS MODULOS
  const getModulos = async () => {
    const request = await fetch(Global.url + '/modulos/traer', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Autorization": localStorage.getItem("token")
      }
    });
    const ModulosData = await request.json();
    if (ModulosData.modulos && ModulosData.status == "success") {
      setModulos(ModulosData.modulos);    
    }
  }

  // Peticion API
  // const getPersonal = async () => {
  //   const request = await fetch(Global.url + '/personal/traer', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Autorization": localStorage.getItem("token")
  //     }
  //   });
  //   const PersonalData = await request.json();
  //   // console.log(PersonalData);
  //   if (PersonalData.personal && PersonalData.status == "success") {
  //    setPersonal(PersonalData.personal);    
  //   }
  // }
  // PersonalService.getPersonalMini().then((data)=>{
  //   console.log(data);
  // })

  useEffect(() => {
    getModulos();
    // getPersonal();
    PersonalService.ReqPersonal().then((data)=> setDataPersonal(data))    
  }, []);


  // const columns = [
  //   { field: 'id', header: 'Id' },
  //   { field: 'code', header: 'Code' },
  //   { field: 'nombres', header: 'Nombre' },
  //   { field: 'apellidos', header: 'Apellido' },
  //   { field: 'correo', header: 'Correo' },
  //   { field: 'telefono', header: 'Telefono' },
  //   { field: 'especialidad', header: 'Especialidad' }

  // ];


  // const dynamicColumns = columns.map((col, i) => {
  //   return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
  // });

  // ------------------------------------
  // TABLE CRUD
  let emptyPersonal = {
    id: null,
    nombres: '',
    imagen: null,
    apellidos: '',
    especialidad: null,
    role: ''


    // inventoryStatus: 'INSTOCK'
  };

  
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);

  const [personalDialog, setPersonalDialog] = useState(false);
  const [deletePersonalDialog, setDeletePersonalDialog] = useState(false);
  // const [deletestaffsDialog, setDeletestaffsDialog] = useState(false);
  const [personal, setPersonal] = useState(emptyPersonal);
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);



  // useEffect(() => {
  //   // StaffService.getStaff().then((data) => setstaffsCRUD(data));
  //   setstaffsCRUD(personal);

  // }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const especialidad = [
    { name: 'Pediatra' },
    { name: 'Psicologo' },
    { name: 'Dentista' },
    { name: 'Enfermera' },
    { name: 'Nutricion' }
  ];

  const openNew = () => {
    setPersonal(emptyPersonal);
    setSubmitted(false);
    setPersonalDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setPersonalDialog(false);
  };

  // Dialog Eliminar personal
  const hideDeletestaffDialog = () => {
    setDeletePersonalDialog(false);
  };

  const hideDeletestaffsDialog = () => {
    setDeletestaffsDialog(false);
  };

  const savePersonal = () => {
    setSubmitted(true);

    if (personal.name.trim()) {
      let _personals = [...personal];
      let _personal = { ...personal };

      if (personal.id) {
        const index = findIndexById(personal.id);

        _personals[index] = _personal;
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personal Updated', life: 4000 });
      } else {
        _personal.id = createId();
        _personal.image = 'personal-placeholder.svg';
        _personals.push(_personal);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personal Created', life: 4000 });
      }

      setstaffs(_personals);
      setPersonalDialog(false);
      setPersonal(emptystaff);
    }
  };

  const editPersonal = (personal) => {
    setPersonal({ ...personal });
    setPersonalDialog(true);
  };

  const confirmDeletePersonal = (personal) => {
    setPersonal(personal);
    setDeletePersonalDialog(true);
  };

  const deletestaff = () => {
    let _personals = personal.filter((val) => val.id !== personal.id);

    setstaffs(_personals);
    setDeletePersonalDialog(false);
    setPersonal(emptystaff);
    toast.current.show({ severity: 'success', summary: 'Personal Eliminado', detail: '', life: 4000 });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < personal.length; i++) {
      if (personal[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeletePersonalDialog(true);
  };

  const deleteSelectedstaffs = () => {
    let _personals = personal.filter((val) => !selectedPersonal.includes(val));

    setstaffs(_personals);
    setSelectedPersonal(false);
    setSelectedPersonal(null);
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Personal Eliminado', life: 4000 });
  };

  const onCategoryChange = (e) => {
    let _personal = { ...personal };

    _personal['category'] = e.value;
    setPersonal(_personal);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _personal = { ...personal };

    _personal[`${name}`] = val;

    setPersonal(_personal);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _personal = { ...personal };

    _personal[`${name}`] = val;

    setPersonal(_personal);
  };

  // const leftToolbarTemplate = () => {
  //   return (
  //     <div className="flex flex-wrap gap-2">
  //       <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
  //       <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedstaffs || !selectedstaffs.length} />
  //     </div>
  //   );
  // };

  // const rightToolbarTemplate = () => {
  //   return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
  // };

  const leftToolbarTemplate = () => {
    return (
        <div className="flex flex-wrap gap-2">
            <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
            <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedstaffs || !selectedstaffs.length} />
        </div>
    );
};

const rightToolbarTemplate = () => {
    return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
};

  const imageBodyTemplate = (rowData) => {

    return <img src={`${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;

  };


  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editPersonal(rowData)} />
        <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeletePersonal(rowData)} />
      </React.Fragment>
    );
  };

  const getSeverity = (personal) => {
    switch (personal.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const header = (nameTable) => (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">{nameTable}</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
      </span>

    </div>
  );


  const staffDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={savePersonal} />
    </React.Fragment>
  );
  const deletestaffDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeletestaffDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deletestaff} />
    </React.Fragment>
  );
  const deletestaffsDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeletestaffsDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedstaffs} />
    </React.Fragment>
  );



  // console.log(personal);
  // AUTENTICACION DE USUARIO
  const { auth } = useAuth();
  const iconModulos = [
    <GroupIcon />,
    <ShareLocationIcon />,
    <MailIcon />,
    <AnnouncementIcon />,
    <StreamIcon />,
    <QuestionMarkIcon />,
    <SettingsApplicationsIcon />
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>

        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#1f3c59'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <CardMedia
            component="img"
            sx={{ height: 100, width: 400 }}
            image={cmaLogo}
            alt="Paella dish"
          />

          <Tooltip title="Opciones">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ minWidth: 20 }}
              aria-controls={openMenu ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
            >
              <Avatar sx={{ width: 60, height: 60 }} src={auth.image}></Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
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
              <Avatar src={auth.image} /> {auth.nombres}
            </MenuItem>
            <Divider />
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
            <Divider />
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            mt: 4
          }}
        >
          {/* {modulos?.map((mod) =>(<ItemModulo key={mod.id} categorias={mod.categorias}/> ))} */}
          
          {
            modulos?.map((modulo, index) => (

              <ListItem disablePadding sx={{ display: 'block', }} key={modulo._id}>
                <ListItemIcon
                  onClick={handleDrawerOpen}
                  sx={{
                    m: open ? 2 : .5,
                    minHeight: 50,
                    minWidth: 50,
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <IconButton
                    sx={{
                      justifyContent: open ? 'initial' : 'center',
                      px: open ? 1.5 : 2,
                      marginLeft: open ? 0 : 2,
                      height: 50,
                    }}
                  >
                    {iconModulos[index]}
                  </IconButton>
                  <Accordion
                    sx={{
                      display: open ? 1 : 'none',
                      width: 230,

                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {modulo.nombre}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        m: 0
                      }}
                    >
                    <ItemCategoria key={modulo.id} categorias={modulo.categorias} />
                      <Divider />

                      <MenuItem>
                        <ListItemIcon>
                          <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Agregar {modulo.nombre}</ListItemText>
                      </MenuItem>
                    </AccordionDetails>
                  </Accordion>
                </ListItemIcon>
                <Typography
                  sx={{
                    display: open ? 'none' : 'block',
                  }}
                  variant='body2'
                  textAlign='center'
                >
                  {modulo.nombre}
                </Typography>
                <Divider />
              </ListItem>
            )
            )}

          <ListItem disablePadding sx={{ display: 'block', mt: 0, }} >
            <ListItemIcon
              onClick={handleDrawerOpen}
              sx={{
                m: open ? 2 : .5,
                minHeight: 50,
                minWidth: 50,
                justifyContent: open ? 'initial' : 'center',
              }}
            >
              <IconButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 1.5 : 2,
                  marginLeft: open ? 0 : 2,
                  height: 50,
                }}
              >
                < SettingsApplicationsIcon />
              </IconButton>
            </ListItemIcon>

            <Typography
              sx={{
                display: open ? 'none' : 'block',
              }}
              variant='body2'
              textAlign='center'
            >
              Agregar
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <ThemeProvider theme={theme}>
            
          <TablePrueba />
        </ThemeProvider>
        {/* <DataTable value={Data} reorderableColumns reorderableRows onRowReorder={(e) => setstaffs(e.value)} tableStyle={{ minWidth: '50rem' }}>
          <Column rowReorder style={{ width: '3rem' }} />
            {dynamicColumns}
        </DataTable> */}
        
        {/* -----------TABLA PERSONAL-----------*/}
        
          
        
                  <Box
                  sx={{
                    display: {
                      laptop: 'none'
                    }
                  }}
                  
                >
                  
                  <Toast ref={toast} />
                  <div className="card" >                    
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    <DataTable
                      
                      ref={dt}
                      value={dataPersonal}
                      // reorderableColumns reorderableRows
                      // onRowReorder={(e) => setstaffs(e.value)} onSelectionChange={(e) => setSelectedstaffs(e.value)}
                      // selection={selectedstaffs} onSelectionChange={(e) => setSelectedstaffs(e.value)} selectionMode="single"
                      dataKey="id"
                      paginator rows={10}
                      rowsPerPageOptions={[5, 10, 25]}
                      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                      currentPageReportTemplate={`Visualizando {first} de {last} de {totalRecords} ${modulos.nombre}`}
                      globalFilter={globalFilter}
                      header={header('Personal')}>
                      <Column field="image" header="Imagen" body={imageBodyTemplate}></Column>
                      {/* <Column field="_id" header="Id" sortable style={{ minWidth: '12rem' }}></Column> */}
                      <Column field="nombres" header="Nombre" sortable style={{ minWidth: '8rem' }}></Column>
                      <Column field="apellidos" header="Apellido" sortable style={{ minWidth: '8rem' }}></Column>
                      <Column field="especialidad" header="Especialidad" sortable style={{ minWidth: '8rem' }}></Column>
                      <Column field="role" header="Rol" sortable style={{ minWidth: '8rem' }}></Column>

                      <Column field="telefono" header="Telefono" sortable style={{ minWidth: '8rem' }}></Column>
                      <Column header='Opciones' body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                    </DataTable>
                    
                  </div>
                
                <Dialog visible={personalDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Personal" modal className="p-fluid" footer={staffDialogFooter} onHide={hideDialog}>
                  {personal.imagen && <img src={`https://primefaces.org/cdn/primereact/images/personal/${personal.imagen}`} alt={personal.imagen} className="personal-image block m-auto pb-3" />}
                  <div className="field">
                    <label htmlFor="nombres" className="font-bold">
                      Nombre
                    </label>
                    <InputText id="nombres" value={personal.nombres} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !personal.name })} style={{ borderRadius: 15 }} />
                    {submitted && !personal.nombres && <small className="p-error">Se requiere Nombre para continuar.</small>}
                  </div>
                  <div className="field">
                    <label htmlFor="apellidos" className="font-bold">
                      Apellido
                    </label>
                    <InputText id="apellidos" value={personal.apellidos} onChange={(e) => onInputChange(e, 'name')} required className={classNames({ 'p-invalid': submitted && !personal.name })} style={{ borderRadius: 15 }} />
                    {submitted && !personal.apellidos && <small className="p-error">Se requiere Apellido para continuar.</small>}
                  </div>
                  <div className="field">
                    <label htmlFor="especialidad" className="font-bold">
                      Especialidad
                    </label>

                    <Dropdown id='especialidad' value={personal.especialidad} filter showClear onChange={(e) => setSelectedEspecialidad(e.value)} required  options={especialidad} optionLabel="name" placeholder="Seleccione Especialidad" style={{ borderRadius: 15 }} />
                    {submitted && !personal.especialidad && <small className="p-error">Se requiere Especialidad para continuar.</small>}
                  </div>

                  
                </Dialog>
        
                <Dialog visible={deletePersonalDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffDialogFooter} onHide={hideDeletestaffDialog}>
                  <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {personal && (
                      <span>
                        Estas seguro de eliminar <b> {personal.nombres}</b> de la tabla Personal?
                      </span>
                    )}
                  </div>
                </Dialog>
        
                {/* <Dialog visible={deletestaffsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffsDialogFooter} onHide={hideDeletestaffsDialog}>
                  <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {personal && <span>Estas seguro de eliminar el siguiente personal?</span>}
                  </div>
                </Dialog> */}

                </Box>
          {/* -----------TABLA ZONAS----------- */}

          <ItemTableZonas />
        
        {/* <Box
          sx={{
            display: {
              laptop: 'none'
            }
          }}
        >
          <Toast ref={toast} />
          <div className="card" >
            <DataTable
              ref={dt}
              value={staffsCRUD}
              reorderableColumns reorderableRows
              selection={selectedstaffs}
              onRowReorder={(e) => setstaffs(e.value)} onSelectionChange={(e) => setSelectedstaffs(e.value)}
              dataKey="id"
              paginator rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Visualizando {first} de {last} de {totalRecords} staffs"
              globalFilter={globalFilter}
              header={header("Nombre de la tabla")}>
              <Column field="image" header="Image" body={imageBodyTemplate}></Column>
              <Column field="code" header="Id" sortable style={{ minWidth: '12rem' }}></Column>
              <Column field="nombre" header="Name" sortable style={{ minWidth: '8rem' }}></Column>
              <Column field="apellido" header="Apellido" sortable style={{ minWidth: '8rem' }}></Column>
              <Column field="especialidad" header="Especialidad" sortable style={{ minWidth: '8rem' }}></Column>
              <Column field="telefono" header="Telefono" sortable style={{ minWidth: '8rem' }}></Column>
              <Column header='Opciones' body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
          </div>
        
        <Dialog visible={personalDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Personal" modal className="p-fluid" footer={staffDialogFooter} onHide={hideDialog}>
          {personal.image && <img src={`https://primefaces.org/cdn/primereact/images/personal/${personal.image}`} alt={personal.image} className="personal-image block m-auto pb-3" />}
          <div className="field">
            <label htmlFor="nombre" className="font-bold">
              Nombre
            </label>
            <InputText id="nombre" value={personal.nombre} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !personal.name })} style={{ borderRadius: 15 }} />
            {submitted && !personal.nombre && <small className="p-error">Se requiere Nombre para continuar.</small>}
          </div>
          <div className="field">
            <label htmlFor="apellido" className="font-bold">
              Apellido
            </label>
            <InputText id="apellido" value={personal.apellido} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !personal.name })} style={{ borderRadius: 15 }} />
            {submitted && !personal.apellidos && <small className="p-error">Se requiere Apellido para continuar.</small>}
          </div>
          <div className="field">
            <label htmlFor="especialidad" className="font-bold">
              Especialidad
            </label>
            <Dropdown value={selectedEspecialidad} filter showClear onChange={(e) => setSelectedEspecialidad(e.value)} options={especialidad} optionLabel="name" placeholder="Seleccione Especialidad" style={{ borderRadius: 15 }} />
          </div>
        </Dialog>

        <Dialog visible={deletePersonalDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffDialogFooter} onHide={hideDeletestaffDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
            {personal && (
              <span>
                Estas seguro de eliminar <b> {personal.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog visible={deletestaffsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffsDialogFooter} onHide={hideDeletestaffsDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
            {personal && <span>Are you sure you want to delete the selected staffs?</span>}
          </div>
        </Dialog>
        </Box> */}

      </Box>
    </Box>
  );
}
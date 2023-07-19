import React, { useState, useEffect, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import ListItemText from '@mui/material/ListItemText';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { grey } from '@mui/material/colors';
import imageDr from '../../../assets/images/doctor1.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ICONS
import GroupIcon from '@mui/icons-material/Group';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StreamIcon from '@mui/icons-material/Stream';

// TABLE CRUD COMPLETE
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { StaffService } from '../../../services/ProductService';

import ImgDr1 from '../../../assets/images/doctor1.jpg';
import ImgDr2 from '../../../assets/images/doctor2.jpg';
import ImgDr3 from '../../../assets/images/doctor3.png';
import ImgDr4 from '../../../assets/images/doctor4.jpg';
import ImgDr5 from '../../../assets/images/doctor5.jpg';
import ImgDr6 from '../../../assets/images/doctor6.jpg';


const drawerWidth = 290;
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
    width: `calc(${theme.spacing(8)} + 1px)`,
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


  const categoryStaff = [
    { nombre: 'Doctores' },
    { nombre: 'Enfermeras' },
    { nombre: 'Administrativo' },
  ]
  const categoryZonas = [
    { nombre: 'Camas Hospital' },
    { nombre: 'Coultorios', },
    { nombre: 'Areas' },
  ]


  const categoryBuzon = [
    { nombre: 'Doctores' },
    { nombre: 'Enfermeras' },
    { nombre: 'Administrativo' },
  ]
  const categoryAnuncios = [
    { nombre: 'Doctores' },
    { nombre: 'Enfermeras' },
    { nombre: 'Administrativo' },
  ]
  const categoryBlogs = [
    { nombre: 'Doctores' },
    { nombre: 'Enfermeras' },
    { nombre: 'Administrativo' },
  ]
  const modules = [
    {
      nombre: 'Staff', icon: <GroupIcon />},
    { nombre: 'Zonas', icon: <ShareLocationIcon />, category: categoryZonas },
    { nombre: 'Buzón', icon: <MailIcon />, category: categoryBuzon },
    { nombre: 'Anuncios', icon: <AnnouncementIcon />, category: categoryAnuncios },
    { nombre: 'Blogs', icon: <StreamIcon />, category: categoryBlogs }
  ]

  const [staffs, setstaffs] = useState([]);
  const columns = [
      { field: 'code', header: 'Mover' },
      { field: 'code', header: 'Code' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'correo', header: 'Correo' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'especialidad', header: 'Especialidad' }

  ];


  const dynamicColumns = columns.map((col, i) => {
      return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
  });


// ------------------------------------
// TABLE CRUD
let emptystaff = {
  id: null,
  name: '',
  image: null,
  description: '',
  category: null,
  price: 0,
  quantity: 0,
  rating: 0,
  inventoryStatus: 'INSTOCK'
};

const [staffsCRUD, setstaffsCRUD] = useState(null);
const [staffDialog, setstaffDialog] = useState(false);
const [deletestaffDialog, setDeletestaffDialog] = useState(false);
const [deletestaffsDialog, setDeletestaffsDialog] = useState(false);
const [staff, setstaff] = useState(emptystaff);
const [selectedstaffs, setSelectedstaffs] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [globalFilter, setGlobalFilter] = useState(null);
const toast = useRef(null);
const dt = useRef(null);

useEffect(() => {
  StaffService.getStaff().then((data) => setstaffsCRUD(data));
}, []);

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const openNew = () => {
  setstaff(emptystaff);
  setSubmitted(false);
  setstaffDialog(true);
};

const hideDialog = () => {
  setSubmitted(false);
  setstaffDialog(false);
};

const hideDeletestaffDialog = () => {
  setDeletestaffDialog(false);
};

const hideDeletestaffsDialog = () => {
  setDeletestaffsDialog(false);
};

const savestaff = () => {
  setSubmitted(true);

  if (staff.name.trim()) {
      let _staffs = [...staffs];
      let _staff = { ...staff };

      if (staff.id) {
          const index = findIndexById(staff.id);

          _staffs[index] = _staff;
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staff Updated', life: 3000 });
      } else {
          _staff.id = createId();
          _staff.image = 'staff-placeholder.svg';
          _staffs.push(_staff);
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staff Created', life: 3000 });
      }

      setstaffs(_staffs);
      setstaffDialog(false);
      setstaff(emptystaff);
  }
};

const editstaff = (staff) => {
  setstaff({ ...staff });
  setstaffDialog(true);
};

const confirmDeletestaff = (staff) => {
  setstaff(staff);
  setDeletestaffDialog(true);
};

const deletestaff = () => {
  let _staffs = staffs.filter((val) => val.id !== staff.id);

  setstaffs(_staffs);
  setDeletestaffDialog(false);
  setstaff(emptystaff);
  toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staff Deleted', life: 3000 });
};

const findIndexById = (id) => {
  let index = -1;

  for (let i = 0; i < staffs.length; i++) {
      if (staffs[i].id === id) {
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
  setDeletestaffsDialog(true);
};

const deleteSelectedstaffs = () => {
  let _staffs = staffs.filter((val) => !selectedstaffs.includes(val));

  setstaffs(_staffs);
  setDeletestaffsDialog(false);
  setSelectedstaffs(null);
  toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staffs Deleted', life: 3000 });
};

const onCategoryChange = (e) => {
  let _staff = { ...staff };

  _staff['category'] = e.value;
  setstaff(_staff);
};

const onInputChange = (e, name) => {
  const val = (e.target && e.target.value) || '';
  let _staff = { ...staff };

  _staff[`${name}`] = val;

  setstaff(_staff);
};

const onInputNumberChange = (e, name) => {
  const val = e.value || 0;
  let _staff = { ...staff };

  _staff[`${name}`] = val;

  setstaff(_staff);
};

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

const priceBodyTemplate = (rowData) => {
  return formatCurrency(rowData.price);
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
          <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editstaff(rowData)} />
          <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeletestaff(rowData)} />
      </React.Fragment>
  );
};

const getSeverity = (staff) => {
  switch (staff.inventoryStatus) {
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

const header = (
  <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Doctores</h4>
      <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
      </span>
      
  </div>
);
const staffDialogFooter = (
  <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={savestaff} />
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
          <Typography variant="h5" noWrap component="div">

          </Typography>
          <Typography variant="h5" noWrap component="div">

          </Typography>

          <Tooltip title="Opciones">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ minWidth: 20 }}
              aria-controls={openMenu ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
            >
              <Avatar sx={{ width: 50, height: 50 }} src={imageDr}></Avatar>
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
              <Avatar src={imageDr} /> Perfil
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
          <Typography
            sx={{
              textAlign: 'center'
            }}
          >
            Centro Médico de las Américas
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemIcon
              onClick={handleDrawerOpen}
              sx={{
                ml: open ? 1 : 1,
                m: 1,
                minHeight: 40,
                minWidth: 50,
                justifyContent: open ? 'initial' : 'center',
                
              }}
            >
              <IconButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 1.5 : 1
                }}
              >
                <GroupIcon />
              </IconButton>
              <Accordion
                sx={{
                  display: open ? 1 : 'none',
                  width: 200,
                  
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Staff
                  </Typography>
                </AccordionSummary>
                {categoryStaff.map((staff) => (
                  <AccordionDetails>
                    <Typography>
                      {staff.nombre}
                    </Typography>
                  </AccordionDetails>
                ))}
              </Accordion>
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemIcon
              onClick={handleDrawerOpen}
              sx={{
                ml: open ? 1 : 1,
                m: 1,
                minHeight: 40,
                minWidth: 50,
                justifyContent: open ? 'initial' : 'center',   
              }}
            >
              <IconButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 1.5 : 1
                }}
              >
                <ShareLocationIcon />
              </IconButton>
              <Accordion
                sx={{
                  display: open ? 1 : 'none',
                  width: 200,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Zonas
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Camas hospital
                  </Typography>
                </AccordionDetails>
                
                <Accordion
                  sx={{
                    display: open ? 1 : 'none',
                    width: 200,
                    
                  }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                          <Typography>
                            Areas
                          </Typography>
                      </AccordionSummary>
                  <AccordionDetails>
                  <Typography>
                      Camas hospital
                    </Typography>
                  </AccordionDetails>                
                </Accordion>                  
                


              </Accordion>
            </ListItemIcon>
          </ListItem>
          <Divider />

          <Divider />
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 50,
                justifyContent: open ? 'initial' : 'center',
                px: 3,
              }}
            >
              <ListItemIcon
                onClick={handleDrawerOpen}
                sx={{

                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <MailIcon />
              </ListItemIcon>
              <Accordion
                sx={{
                  display: open ? 1 : 'none'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Buzón
                  </Typography>
                </AccordionSummary>
              </Accordion>
              {/* <ListItemText primary={modules.nombre} onClick={handleDrawerClose} sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 50,
                justifyContent: open ? 'initial' : 'center',
                px: 3,
              }}
            >
              <ListItemIcon
                onClick={handleDrawerOpen}
                sx={{

                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AnnouncementIcon />
              </ListItemIcon>
              <Accordion
                sx={{
                  display: open ? 1 : 'none'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Anuncios
                  </Typography>
                </AccordionSummary>
              </Accordion>
              {/* <ListItemText primary={modules.nombre} onClick={handleDrawerClose} sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 50,
                justifyContent: open ? 'initial' : 'center',
                px: 3,
              }}
            >
              <ListItemIcon
                onClick={handleDrawerOpen}
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >

                <StreamIcon />
              </ListItemIcon>

              <Accordion
                sx={{
                  display: open ? 1 : 'none'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Blogs
                  </Typography>
                </AccordionSummary>
              </Accordion>
              {/* <ListItemText primary={modules.nombre} onClick={handleDrawerClose} sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemIcon
              onClick={handleDrawerOpen}
              sx={{
                ml: open ? 1 : 1,
                m: 1,
                minHeight: 40,
                minWidth: 50,
                justifyContent: open ? 'initial' : 'center',   
              }}
            >
              <IconButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 1.5 : 1
                }}
              >
                <ShareLocationIcon />
              </IconButton>
              <Accordion
                sx={{
                  display: open ? 1 : 'none',
                  width: 200,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Encuestas
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Atencion al cliente
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    Calidad
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListItemIcon>
          </ListItem>

      </Drawer>
      

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        {/* <DataTable value={Data} reorderableColumns reorderableRows onRowReorder={(e) => setstaffs(e.value)} tableStyle={{ minWidth: '50rem' }}>
          <Column rowReorder style={{ width: '3rem' }} />
            {dynamicColumns}
        </DataTable> */}
        {/* ---------------------------------------- */}
        <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={staffsCRUD} reorderableColumns reorderableRows  selection={selectedstaffs} onRowReorder={(e) => setstaffs(e.value)} onSelectionChange={(e) => setSelectedstaffs(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} staffs" globalFilter={globalFilter} header={header}>
                    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                    <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="nombre" header="Name" sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="apellido" header="Apellido" sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="description" header="Descripcion" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="valoracion" header="Valoracion" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="especialidad" header="Especialidad" sortable style={{ minWidth: '8rem' }}></Column>
                    <Column header='Opciones' body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={staffDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="staff Details" modal className="p-fluid" footer={staffDialogFooter} onHide={hideDialog}>
                {staff.image && <img src={`https://primefaces.org/cdn/primereact/images/staff/${staff.image}`} alt={staff.image} className="staff-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Nombre
                    </label>
                    <InputText id="name" value={staff.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !staff.name })} />
                    {submitted && !staff.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Descripcion
                    </label>
                    <InputTextarea id="description" value={staff.description} onChange={(e) => onInputChange(e, 'descripion')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3 font-bold">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={staff.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={staff.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={staff.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={staff.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Price
                        </label>
                        <InputNumber id="price" value={staff.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Quantity
                        </label>
                        <InputNumber id="quantity" value={staff.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deletestaffDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffDialogFooter} onHide={hideDeletestaffDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {staff && (
                        <span>
                            Estas seguro de eliminar <b>{staff.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deletestaffsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffsDialogFooter} onHide={hideDeletestaffsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {staff && <span>Are you sure you want to delete the selected staffs?</span>}
                </div>
            </Dialog>
      </Box>

    </Box>
  );
}
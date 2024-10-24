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
import { StaffService } from '../../../services/StaffService';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';

const ItemTables = (a) => {


  const [staffs, setstaffs] = useState([]);
  const columns = [
    { field: 'id', header: 'Id' },
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


    inventoryStatus: 'INSTOCK'
  };

  const [staffsCRUD, setstaffsCRUD] = useState(null);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);

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

  const especialidad = [
    { name: 'Pediatra' },
    { name: 'Psicologo' },
    { name: 'Dentista' },
    { name: 'Enfermera' },
    { name: 'Nutricion' }
  ];

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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staff Updated', life: 4000 });
      } else {
        _staff.id = createId();
        _staff.image = 'staff-placeholder.svg';
        _staffs.push(_staff);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'staff Created', life: 4000 });
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
    toast.current.show({ severity: 'success', summary: 'Personal Eliminado', detail: '', life: 4000 });
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
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Personal Eliminado', life: 4000 });
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
      <Box
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

         <Dialog visible={staffDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Personal" modal className="p-fluid" footer={staffDialogFooter} onHide={hideDialog}>
            {staff.image && <img src={`https://primefaces.org/cdn/primereact/images/staff/${staff.image}`} alt={staff.image} className="staff-image block m-auto pb-3" />}
            <div className="field">
               <label htmlFor="nombre" className="font-bold">
                  Nombre
               </label>
               <InputText id="nombre" value={staff.nombre} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !staff.name })} style={{ borderRadius: 15 }} />
               {submitted && !staff.nombre && <small className="p-error">Se requiere Nombre para continuar.</small>}
            </div>
            <div className="field">
               <label htmlFor="apellido" className="font-bold">
                  Apellido
               </label>
               <InputText id="apellido" value={staff.apellido} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !staff.name })} style={{ borderRadius: 15 }} />
               {submitted && !staff.apellidos && <small className="p-error">Se requiere Apellido para continuar.</small>}
            </div>
            <div className="field">
               <label htmlFor="especialidad" className="font-bold">
                  Especialidad
               </label>
               <Dropdown value={selectedEspecialidad} filter showClear onChange={(e) => setSelectedEspecialidad(e.value)} options={especialidad} optionLabel="name" placeholder="Seleccione Especialidad" style={{ borderRadius: 15 }} />
            </div>
         </Dialog>

         <Dialog visible={deletestaffDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletestaffDialogFooter} onHide={hideDeletestaffDialog}>
            <div className="confirmation-content">
               <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
               {staff && (
                  <span>
                     Estas seguro de eliminar <b> {staff.name}</b>?
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
   )
}

export default ItemTables

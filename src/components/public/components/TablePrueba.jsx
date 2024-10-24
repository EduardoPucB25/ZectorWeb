import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import Box from '@mui/material/Box';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Dropdown } from 'primereact/dropdown';
import { PersonalService } from '../../../services/Personal.service';
import { EspecialidadService } from '../../../services/Especialidad.service';
import { Link, Route, redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const TablePrueba = () => {

   const direct = redirect();

   let emptyPersonal = {
      id: null,
      nombres: '',
      imagen: null,
      apellidos: '',
      especialidad: null,
      role: ''
   };

   const [dataPersonal, setDataPersonal] = useState(null);
   const [dataEspecialidad, setDataEspecialidad] = useState(null);
   const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);


   const [personales, setPersonales] = useState(null);
   const [personalDialog, setPersonalDialog] = useState(false);
   const [deleteProductDialog, setDeleteProductDialog] = useState(false);
   const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
   const [personal, setPersonal] = useState(emptyPersonal);
   const [selectedPersonal, setSelectedPersonal] = useState(null);
   const [submitted, setSubmitted] = useState(false);
   const [globalFilter, setGlobalFilter] = useState(null);
   const toast = useRef(null);
   const dt = useRef(null);

   // Services API
   useEffect(() => {
      // ProductService.getProducts().then((data) => setPersonales(data));
      PersonalService.ReqPersonal().then((data) => setDataPersonal(data));
      EspecialidadService.ReqEspecialidad().then((data) => setDataEspecialidad(data));
   }, []);

   const watchPerfil = (data) =>{
      const usuario = data;
      console.log(usuario);
      
      
      // return (<NavLink to="/cma/miperfil"></NavLink>)
   }

   const formatCurrency = (value) => {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   };

   const openNew = () => {
      setPersonal(emptyPersonal);
      setSubmitted(false);
      setPersonalDialog(true);
   };

   const hideDialog = () => {
      setSubmitted(false);
      setPersonalDialog(false);
   };

   const hideDeleteProductDialog = () => {
      setDeleteProductDialog(false);
   };

   const hideDeleteProductsDialog = () => {
      setDeleteProductsDialog(false);
   };

   const savePersonal = () => {
      setSubmitted(true);

      if (personal.name.trim()) {
         
         let _personal = { ...personal };

         if (personal.id) {
            const index = findIndexById(personal.id);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personal Updated', life: 3000 });
         } else {
            _personal.imagen = 'personal-placeholder.svg';
            
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personal Created', life: 3000 });
         }

         
         setPersonalDialog(false);
         setPersonal(emptyPersonal);
      }
   };

   const editProduct = (personal) => {
      setPersonal({ ...personal });
      setPersonalDialog(true);
   };

   const confirmDeleteProduct = (personal) => {
      setPersonal(personal);
      setDeleteProductDialog(true);
   };

   const deleteProduct = () => {
      let _personales = personales.filter((val) => val.id !== personal.id);

      setPersonales(_personales);
      setDeleteProductDialog(false);
      setPersonal(emptyProduct);
      toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personal Deleted', life: 3000 });
   };

   const findIndexById = (id) => {
      let index = -1;

      for (let i = 0; i < personales.length; i++) {
         if (personales[i].id === id) {
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
      setDeleteProductsDialog(true);
   };

   const deleteSelectedProducts = () => {
      let _personales = personales.filter((val) => !selectedProducts.includes(val));

      setPersonales(_personales);
      setDeleteProductsDialog(false);
      setSelectedProducts(null);
      toast.current.show({ severity: 'success', summary: 'Successful', detail: 'personales Deleted', life: 3000 });
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

   const leftToolbarTemplate = () => {
      return (
         <div className="flex flex-wrap gap-2">
            <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
            <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedPersonal} />
         </div>
      );
   };

   const rightToolbarTemplate = () => {
      return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
   };

   const imageBodyTemplate = (rowData) => {
      return <img src={`https://primefaces.org/cdn/primereact/images/personal/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
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
            <Button icon="pi pi-pencil" rounded style={{margin: 3}} outlined className="mr-2" onClick={() => editProduct(rowData)} />
            <Button icon="pi pi-trash" rounded style={{margin: 3}} outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            {/* <NavLink to="/cma/perfil/" >
               {console.log(rowData._id)} */}
            <NavLink to={`/cma/perfil/${rowData._id}`} >
                        <Button
                           underline="none"
                           variant="solid"
                           color="success"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 2, pl: 2}}
                        >
                           Ver perfil
                        </Button>
                     </NavLink>
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
 
 
   const header = (


      <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
         <h4 className="m-0">Personal</h4>
         <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} style={{ marginInline: 10 }} />
         <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
         </span>
      </div>
   );
   const productDialogFooter = (
      <React.Fragment>
         <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
         <Button label="Save" icon="pi pi-check" onClick={savePersonal} />
      </React.Fragment>
   );
   const deleteProductDialogFooter = (
      <React.Fragment>
         <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
         <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
      </React.Fragment>
   );
   const deleteProductsDialogFooter = (
      <React.Fragment>
         <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
         <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
      </React.Fragment>
   );

   return (
      <div>
         <Box marginTop={5}>

         </Box>
         <Toast ref={toast} />
         <div className="card">
            {/* <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate} ></Toolbar> */}

            <DataTable ref={dt} value={dataPersonal}
               selectionMode="single" selection={selectedPersonal} onSelectionChange={(e) => watchPerfil(e.value)}
               dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} 
               paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords} personales" globalFilter={globalFilter} header={header}>

               <Column field="image" header="Imagen" body={imageBodyTemplate}></Column>
               {/* <Column field="_id" header="Id" sortable style={{ minWidth: '12rem' }}></Column> */}
               <Column field="nombres" header="Nombre" sortable style={{ minWidth: '8rem' }}></Column>
               <Column field="apellidos" header="Apellido" sortable style={{ minWidth: '8rem' }}></Column>
               <Column field="especialidad" header="Especialidad" sortable style={{ minWidth: '8rem' }}></Column>
               <Column field="role" header="Rol" sortable style={{ minWidth: '8rem' }}></Column>

               <Column field="telefono" header="Telefono" sortable style={{ minWidth: '8rem' }}></Column>
               <Column header='Opciones' body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
               {/* <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column> */}
            </DataTable>
         </div>

         <Dialog visible={personalDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Detalles de Personal" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
            {personal.imagen && <img src={`https://primefaces.org/cdn/primereact/images/personal/${personal.imagen}`} alt={personal.imagen} className="personal-image block m-auto pb-3" />}
            <div className="field">
               <label htmlFor="nombres" className="font-bold">
                  Nombre
               </label>
               <InputText id="nombres" value={personal.nombres} onChange={(e) => onInputChange(e, 'nombres')} required autoFocus className={classNames({ 'p-invalid': submitted && !personal.nombres })} style={{ borderRadius: 15 }} />
               {submitted && !personal.nombres && <small className="p-error">Se requiere del campo Nombre.</small>}
            </div>
            <div className="field">
               <label htmlFor="apellidos" className="font-bold">
                  Apellido
               </label>
               <InputText id="apellidos" value={personal.apellidos} onChange={(e) => onInputChange(e, 'apellidos')} required autoFocus className={classNames({ 'p-invalid': submitted && !personal.apellidos })} style={{ borderRadius: 15 }} />
               {submitted && !personal.apellidos && <small className="p-error">Se requiere del campo Apellido.</small>}
            </div>
            <div className="field">
               <label htmlFor="especialidad" className="font-bold">
                  Especialidad
               </label>
               <Dropdown value={personal.especialidad} filter showClear onChange={(e) => setSelectedEspecialidad(e.value)} options={dataEspecialidad} optionLabel="nombre" placeholder="Seleccione Especialidad" style={{ borderRadius: 15 }} />
               {submitted && !personal.especialidad && <small className="p-error">Se requiere Especialidad para continuar.</small>}
            </div>
            <div className="field">
               <label htmlFor="telefono" className="font-bold">
                  Telefono
               </label>
               <InputText id="telefono" value={personal.telefono} onChange={(e) => onInputChange(e, 'name')} required className={classNames({ 'p-invalid': submitted && !personal.telefono })} style={{ borderRadius: 15 }} />
               {submitted && !personal.telefono && <small className="p-error">Se requiere <b>Telefono</b> para continuar.</small>}
            </div>
            <div className="field">
               <label htmlFor="description" className="font-bold">
                  Description
               </label>
               <InputTextarea id="description" value={personal.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
            </div>

         </Dialog>

         <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirmar" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
            <div className="confirmation-content">
               <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
               {personal && (
                  <span>
                     Estas seguro de eliminar <b>{personal.nombres}</b> de la tabla <b>Personal</b>?
                  </span>
               )}
            </div>
         </Dialog>

      </div>
   );
}

export default TablePrueba
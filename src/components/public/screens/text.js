const formatCurrency = (value) => {
   return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const openNew = () => {
   setProduct(emptyProduct);
   setSubmitted(false);
   setProductDialog(true);
};

const hideDialog = () => {
   setSubmitted(false);
   setProductDialog(false);
};

const hideDeleteProductDialog = () => {
   setDeleteProductDialog(false);
};

const hideDeleteProductsDialog = () => {
   setDeleteProductsDialog(false);
};

const saveProduct = () => {
   setSubmitted(true);

   if (product.name.trim()) {
       let _products = [...products];
       let _product = { ...product };

       if (product.id) {
           const index = findIndexById(product.id);

           _products[index] = _product;
           toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
       } else {
           _product.id = createId();
           _product.image = 'product-placeholder.svg';
           _products.push(_product);
           toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
       }

       setProducts(_products);
       setProductDialog(false);
       setProduct(emptyProduct);
   }
};

const editProduct = (product) => {
   setProduct({ ...product });
   setProductDialog(true);
};

const confirmDeleteProduct = (product) => {
   setProduct(product);
   setDeleteProductDialog(true);
};

const deleteProduct = () => {
   let _products = products.filter((val) => val.id !== product.id);

   setProducts(_products);
   setDeleteProductDialog(false);
   setProduct(emptyProduct);
   toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

const findIndexById = (id) => {
   let index = -1;

   for (let i = 0; i < products.length; i++) {
       if (products[i].id === id) {
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
   let _products = products.filter((val) => !selectedProducts.includes(val));

   setProducts(_products);
   setDeleteProductsDialog(false);
   setSelectedProducts(null);
   toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};

const onCategoryChange = (e) => {
   let _product = { ...product };

   _product['category'] = e.value;
   setProduct(_product);
};

const onInputChange = (e, name) => {
   const val = (e.target && e.target.value) || '';
   let _product = { ...product };

   _product[`${name}`] = val;

   setProduct(_product);
};

const onInputNumberChange = (e, name) => {
   const val = e.value || 0;
   let _product = { ...product };

   _product[`${name}`] = val;

   setProduct(_product);
};

const leftToolbarTemplate = () => {
   return (
       <div className="flex flex-wrap gap-2">
           <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
           <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
       </div>
   );
};

const rightToolbarTemplate = () => {
   return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
};

const imageBodyTemplate = (rowData) => {
   return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
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
           <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
           <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
       </React.Fragment>
   );
};

const getSeverity = (product) => {
   switch (product.inventoryStatus) {
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
       <h4 className="m-0">Manage Products</h4>
       <span className="p-input-icon-left">
           <i className="pi pi-search" />
           <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
       </span>
   </div>
);
const productDialogFooter = (
   <React.Fragment>
       <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
       <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
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
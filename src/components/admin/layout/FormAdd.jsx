import React, { Component } from 'react'

import GridForm from '../components/GridFormPersonal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import imageDr from '../../../assets/images/doctor1.jpg'
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

// IMPORTS PRIMEREACT
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { SelectList } from '../components/SelectList';
import { InputTextarea } from 'primereact/inputtextarea';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
   margin: 'auto',
   display: 'block',
   maxWidth: '100%',
   maxHeight: '100%',
});

export class FormAdd extends Component {

   constructor(props) {
      super(props);
      this.state = {

         displayTablePersonal: false,
         position: 'center'
      };

      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
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

   render() {
      return (
         <div style={{ alignItems: 'center' }}>
            <Button label="Agregar " icon="pi pi-plus" className="p-mr-2" onClick={() => this.onClick('displayTablePersonal')} />

            <Dialog header="Agregar Personal" visible={this.state.displayTablePersonal} style={{ height: 1000, width: 600 }} footer={this.renderFooter('displayTablePersonal')} onHide={() => this.onHide('displayTablePersonal')}>
               {/* AQUI INICIA EL FORMULARIO */}
               <GridForm/>

            </Dialog>
         </div>
      )
   }
}
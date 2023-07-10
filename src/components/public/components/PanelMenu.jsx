import React, { Component } from 'react';
// IMPORTS ICONS
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import AddCardIcon from '@mui/icons-material/AddCard';
import { PanelMenu } from 'primereact/panelmenu';


export class PanelMenuAdmin extends Component {

   constructor(props) {
      super(props);

      this.items = [
         {
            label: 'Personal',
            icon: <Diversity3Icon />,
            items: [
               {
                  label: 'Medicos',
                  icon: <Diversity3Icon />,

               },
               {
                  // icon: <SubdirectoryArrowRightIcon sx={{margin:.5}}/>,
                  icon: <Diversity3Icon />,
                  label: 'Dentistas',

               },
               {
                  label: 'Agregar',
                  icon: <AddCardIcon/>,
               }
            ]
         },
         {
            label: 'Areas',
            icon: <FindReplaceIcon />,
            items: [
               {
                  label: 'Hospitalización',
                  icon: 'pi pi-fw pi-align-left'
               },
               {
                  label: 'Banco de Sangre',
                  icon: 'pi pi-fw pi-align-right'
               },
               {
                  label: 'Consultorio',
                  icon: 'pi pi-fw pi-align-center'
               }
            ]
         },
         {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
               {
                  label: 'Admins',
                  icon: 'pi pi-fw pi-user-plus'
               },
               {
                  label: 'Hospitales',
                  icon: 'pi pi-fw pi-user-minus'
               },
               {
                  label: '',
                  icon: 'pi pi-fw pi-users',
                  items: [
                     {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                           {
                              label: 'Print',
                              icon: 'pi pi-fw pi-print'
                           }
                        ]
                     },
                     {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                     }
                  ]
               }
            ]
         },
         {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
               {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                     {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                     },
                     {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               },
               {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                     {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
            ]
         },
         {
            label: 'Nuevo Modulo',
            icon: <AddCardIcon/>,
         }        
      ];
   }

   render() {
      return (
         <div>
            <div className="card">
               <PanelMenu model={this.items} style={{ width: '100%' }} />
            </div>
         </div>
      );
   }
}
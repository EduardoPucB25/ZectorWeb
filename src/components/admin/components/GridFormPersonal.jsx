import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import imageDr from '../../../assets/images/doctor1.jpg'
import { Avatar } from '@mui/material';

// IMPORTS PRIMEREACT
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { SelectList } from './SelectList';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


const Img = styled('img')({
   margin: 'auto',
   display: 'block',
   maxWidth: '100%',
   maxHeight: '100%',
});

export default function GridFormPersonal() {
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
                                    <Avatar alt="complex" src={imageDr} sx={{ height: 60, width: 60 }}/>
                                 </Grid>

                                 {/* Editar el label del selector de imagen  */}
                                 <Grid  item>
                                    <FileUpload  name="demo" url="./upload" mode="basic" label='Seleccionar Imagen' chooseLabel="Seleccionar Imagen"/>
                                 </Grid>
                              </Grid>

                              {/* Imagen */}
                              <Grid item >
                                 <Grid className="p-float-label">
                                    <InputText id="inputtext" style={{ width: '100%', borderRadius: 15}} />
                                    <label htmlFor="inputtext">Nombre</label>
                                 </Grid>
                              </Grid>

                              <Grid item xs>
                                 <Grid className="p-float-label">
                                    <InputText id="inputtext" style={{ width: '100%',  borderRadius: 15}} />
                                    <label htmlFor="inputtext">Apellidos</label>
                                 </Grid>
                              </Grid>

                              {/* INPUT ESPECIALIDAD Y CEDULA */}
                              <Grid item xs container direction="row" spacing={2} >
                                 <Grid item xs>
                                    <SelectList  option={'especialidad'}/>
                                 </Grid>
                                 <Grid item xs>
                                    <Grid className="p-float-label" >
                                       <InputText id="inputtext"  style={{ width: '100%',  borderRadius: 15}}/>
                                       <label htmlFor="inputtext">Cedula</label>
                                    </Grid>
                                 </Grid>
                              </Grid>
                              <Grid item>
                                 <Button/>
                              </Grid>
                              

                              <Grid item xs >

                                 <Grid item>
                                    <Grid className="p-float-label">
                                       <InputTextarea id="textarea" rows={4} style={{ width: '100%',  borderRadius: 15}}/>
                                       <label htmlFor="textarea">Sobre mí...</label>
                                    </Grid>
                                 </Grid>
                              </Grid>


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
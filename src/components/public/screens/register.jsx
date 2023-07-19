import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
// IMPORTS PRIMEREACT

import { InputText } from 'primereact/inputtext';

import { useFormRegister } from '../../../hooks/use-form-register';
import { Password } from 'primereact/password';

 export const Register = () => {

  const {form, changed} = useFormRegister({});

  const saveUser = (e) =>{
    e.preventDefault();
    let newUser = form;
    console.log(newUser);
  }

  return (
    <div>
      <Paper
        sx={{
          p: 15,
          margin: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        {/* CONTENEDOR MAYOR DE FORMULARIO */}
        <Grid item sm xs={12} container>
          <Grid item sm container direction="column" xs spacing={1}>

            {/* SECCION 1 DE FORMULARIO */}
            <Grid item >
              <Paper
                sx={{
                  p: 5,
                  margin: 'auto',
                  maxWidth: 450,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <form onSubmit={saveUser}>
                <Grid item sm xs={12} container>
                  {/* FORMULARIO DE PERSONAL */}
                  <Grid item sm container direction="column" xs spacing={3}>
                    <Grid item xs>
                      <Typography variant="h4" gutterBottom sx={{ minWidth: 200, textAlign: 'center' }}>
                        Registro
                      </Typography>
                    </Grid>
                    
                      <Grid item xs>
                        <Grid className="p-float-label">
                          <InputText id="inputNombre" style={{ width:350, borderRadius: 15}} onChange={changed} />
                          <label htmlFor="inputNombre">Nombre</label>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid className="p-float-label">
                          <InputText id="inputApellidos" style={{ width:350, borderRadius: 15}} onChange={changed}/>
                          <label htmlFor="inputApellidos">Apellido</label>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid className="p-float-label">
                          <InputText id="inputCorreo" style={{ width:350, borderRadius: 15}} onChange={changed}/>
                          <label htmlFor="inputCorreo">Correo / Email</label>
                        </Grid>
                      </Grid>


                      <Grid item xs>
                        <Grid className="p-float-label">
                        <Password id="inputPassword" name="value" mediumRegex inputStyle={{ borderRadius: 15, width:350 }}  onChange={changed} toggleMask/>
                          <label htmlFor="inputPassword">Contraseña</label>
                        </Grid>
                      </Grid>

                      <Grid item xs md container direction='row' >
                        <Grid item>
                          
                        </Grid>
                        <Grid item >
                          <Link
                            href="login"
                            underline="none"
                            color="primary"
                            level='body2'
                            sx={{ '--Link-gap': '0.5rem', pr: 0, pl: 0 }}
                          >
                            ¿Ya tienes cuenta?  Ingresa
                          </Link>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm container direction='row' >
                        <Grid item xs></Grid>
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, paddingTop: 3 }}
                          >
                            <input type='submit' />
                            {/* <Link
                              href="login"
                              underline="none"
                              variant="solid"
                              color="primary"
                              level='h5'
                              sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                            >
                              Ingresar
                            </Link> */}
                          </Box>
                        <Grid item xs ></Grid>
                      </Grid>                      
                  </Grid>
                </Grid>
                </form>
              </Paper>
            </Grid>
            {/* SECCION 1 DE FORMULARIO */}

          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}



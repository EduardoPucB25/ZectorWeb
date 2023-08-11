import React,  { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';

// IMPORTS PRIMEREACT
import { useFormLogin } from '../../../hooks/use-form-login';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

export const Login = () => {
  const {form, changed} = useFormLogin({});
  const [value, setValue] = useState('');

  const validateUser = (e) =>{
    e.preventDefault();
    let newUser = form;
    console.log(newUser);
  }

  return (
    <div>
      <Paper
        sx={{
          p: 5,
          margin: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          height: '100%',
          width: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        
        <Grid item sm xs={12} container >

          <Grid item container direction="column" sx>
            <Grid item>
              <Paper
                sx={{
                  p: 5,
                  margin: 'auto',
                  maxWidth: 500,
                  maxHeight: 350,
                  width: 450,
                  height: 350,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid item sm xs={12} container>
                  
                  <Grid item sm container direction="column" xs spacing={3} alignItems={'center'}>
                    <Grid item xs>
                      <Typography variant="h4" gutterBottom sx={{ minWidth: 200, marginTop: 2}}>
                        Bienvenido 
                      </Typography>
                    </Grid>

                    <Grid item xs >
                      <Grid className="p-float-label">
                        <InputText id="inputtext" style={{ width:270, borderRadius: 15}} />
                        <label htmlFor="inputtext">Correo / Email</label>
                      </Grid>
                    </Grid>

                    <Grid item xs>
                        <Grid  className="p-float-label">
                            <Password name="value" strongRegex inputStyle={{ width:270, borderRadius: 15}} inputId="password" value={value} onChange={(e) => setValue(e.target.value)}  toggleMask/>
                            <label  htmlFor="password">Password</label>
                        </Grid> 
                    </Grid>


                    <Grid item xs={12} sm marginTop={2}>
                      <Grid item xs></Grid>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                          >
                            <Link
                                onClick={validateUser}
                                underline="none"
                                variant="solid"
                                color="primary"
                                level='h6'
                                sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                            >
                                Ingresar
                            </Link>
                          </Box>
                                
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* SECCION 1 DE FORMULARIO */}

          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}



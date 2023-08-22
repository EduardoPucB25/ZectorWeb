import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material';

// IMPORTS PRIMEREACT
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import { Global } from '../../../helpers/global';
import { useFormLogin } from '../../../hooks/use-form-login';
import { theme } from './responsiveAreas';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Toast } from 'primereact/toast';
import { Message } from 'primereact/message';
        
export const Login = () => {
  const { form, changed } = useFormLogin({});
  const [value, setValue] = useState('');

  const toast = useRef(null);
  // const toast = useRef(null);

  // const { data, setData } = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const saveUser = async (form) => {

    let newUser = form;
    console.log(newUser);
    const request = await fetch(Global.url + "usuario/login", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await request.json();
    console.log(data);
    if( data.status == 'success'){
      showLogin(data.user);
    };
    
    if( data.status == 'error'){
      showError();
    };
  }

  const showLogin = (user) => {
    const usuario = user.nombre;

    toast.current.show({
      severity: 'success',
      summary: 'Ingresando',
      detail: `Bienvenido ${usuario}`
    });
  };
  const showError = () => {
    toast.current.show({
      severity: 'error', summary: 'Contraseña incorrecta'
    });
  };

  const formik = useFormik({
    initialValues: {
      correo: '',
      password: ''
    },
    validate: (data) => {
      let errors = {};
      if (!data.correo) {
        errors.correo = 'El campo correo es requerido.';
      }
      if (!data.password) {
        errors.password = 'El campo contraseña es requerido.';
      }
      return errors;
    },
    onSubmit: (data) => {
      saveUser(data);
      formik.resetForm();
    }
  });

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
  };



  return (
    <div>
      <ThemeProvider theme={theme}>
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
                  <Typography variant="h4" gutterBottom sx={{ minWidth: 200, textAlign: 'center' }}>
                    Registro
                  </Typography>



                  {/* Formulario Simple */}
                  <form onSubmit={formik.handleSubmit}>
                  <Toast ref={toast} />
                    <Grid item sm xs={12} container>

                      <Grid item sm container direction="column" xs spacing={3}>
                        {/* <Grid item xs>
                          <Typography variant="h4" gutterBottom sx={{ minWidth: 200, textAlign: 'center' }}>
                            Registro
                          </Typography>
                        </Grid> */}


                        <Grid item xs>
                          <Grid >
                            <label htmlFor="correo">Correo / Email</label>
                            <input type='text' id='correo' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.correo} name="correo" onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                                
                              }}/>
                            
                            {/* <InputText id="inputCorreo" style={{ width: 350, borderRadius: 15, padding: 5 }} name="correo" onChange={changed} /> */}
                            
                          </Grid>
                          {getFormErrorMessage('correo')}
                        </Grid>

                        <Grid item xs>
                          <Grid >
                            <label htmlFor="password" name='pasword'>Contraseña</label>
                            <input type={showPassword ? 'text' : 'password'} id='password' value={formik.values.password} style={{ width: 340, borderRadius: 15, padding: 5,}} name="password" onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                                changed
                              }}/>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>                              
                            

                            {/* <Password type="password" id="inputPassword" inputStyle={{ borderRadius: 10, width: 350, padding: 5 }} name="password" onChange={changed} /> */}
                            
                          </Grid>
                          {getFormErrorMessage('password')}
                        </Grid>


                        {/* <Grid item xs>
                          <Grid >
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                            <i className="bi bi-eye-slash"></i> <i className="bi bi-eye"></i>
                            <button className="btn btn-outline-primary" onClick={togglePassword}>
                            { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                            </button>
                           
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
                              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="Password"
                              />
                            </FormControl>        

                          </Grid>
                        </Grid> */}


                        <Grid item xs md container direction='row' >
                          <Grid item >
                           
                          <NavLink to="/cma/login" underline='none'>

                                <Link
                                  variant="solid" 
                                  sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                                >
                                  Ingresa
                                </Link>
                            </NavLink>
                          </Grid>
                        </Grid>
                        <Grid item xs sm container direction='row' >

                          <Grid item xs marginX={15}>
                            {/* <NavLink to="/cma/login">
                              <Link
                                component="button"
                                underline="none"
                                sx={{ backgroundColor: '#0f6cbf', p: 1, pr: 2, pl: 2, borderRadius: 15, }}
    
                              >
                                <Typography sx={{ color: 'white' }}>
                                  Registrarse
                                </Typography>

                              </Link>
                            </NavLink> */}

                            <Button
                              type="submit"
                              label="Registrarse"
                              raised
                              rounded
                              sx={{ p: 1, pr: 2, pl: 2, }}
                            />
                          </Grid>



                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
        </Paper>
      </ThemeProvider>
    </div>
  )
}



import React, { Component, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// IMPORTS PRIMEREACT
import { InputText } from 'primereact/inputtext';
import { useFormRegister } from '../../../hooks/use-form-register';
import { Global } from '../../../helpers/global';

import { Password } from 'primereact/password';
import { theme } from './responsiveAreas';

// FORMIK
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const Register = () => {
  // FORMIK
  const toast = useRef(null);
  // const toast = useRef(null);
  const { form, changed } = useFormRegister({});

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
    const request = await fetch(Global.url + "/usuario/registrar", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
         "Content-Type": "application/json"
      }
    });

    const data = await request.json();
    console.log(data);
    // if(data.status == 'success'){
    //   showLogin(data.user);
    // };
    
    // if(data.status == 'error'){
    //   showError();
    // };
  }

  // const showLogin = (user) => {
  //   const usuario = user.nombre;

  //   toast.current.show({
  //     severity: 'success',
  //     summary: 'Se ha registrado correctamente',
  //     detail: `Bienvenido ${usuario}`
  //   });
  // };

  // const showError = () => {
  //   toast.current.show({
  //     severity: 'error', summary: 'Error al registrarse'
  //   });
  // };

  const formik = useFormik({

    initialValues: {
      nombres: '',
      apellidos: '',
      correo: '',
      password: ''
    },
    validate: (data) => {
      let errors = {};
      if (!data.nombres) {
        errors.nombres = 'El campo nombre es requerido.';
      }
      if (!data.apellidos) {
        errors.apellidos = 'El campo apellido es requerido.';
      }
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

  // const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");
  // const handlePasswordChange =(evnt)=>{
  //     setPasswordInput(evnt.target.value);
  // }
  // const togglePassword =()=>{
  //   if(passwordType==="password")
  //   {
  //    setPasswordType("text")
  //    return;
  //   }
  //   setPasswordType("password")
  // }


  return (


    <div>
      <ThemeProvider theme={theme}>

                {/* PANTALLA LAPTOP */}
                <Paper
                  sx={{
                    display: {
                      mobile: 'none',
                      laptop: 'block',
                      desktop: 'none'
                    },
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
                  {/* <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <span className="p-float-label">
                      <Toast ref={toast} />
                      <Grid item sm container direction="column" xs spacing={3}>
                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="nombres"
                              name="nombres"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.nombres}
                              onChange={(e) => {
                                formik.setFieldValue('nombres', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('nombres') })}
                            />
                            <label htmlFor="nombres">Nombre</label>
                          </Grid>
                          {getFormErrorMessage('nombres')}
                        </Grid>


                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="apellidos"
                              name="apellidos"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.apellidos}
                              onChange={(e) => {
                                formik.setFieldValue('apellidos', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('apellidos') })}
                            />
                            <label htmlFor="apellidos">Apellido</label>
                          </Grid>
                          {getFormErrorMessage('apellidos')}
                        </Grid>


                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="correo"
                              name="correo"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.correo}
                              onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('correo') })}
                            />
                            <label htmlFor="correo">Correo</label>
                          </Grid>
                          {getFormErrorMessage('correo')}
                        </Grid>

                        <Grid item xs >
                          <Grid className="p-float-label">
                            <Password
                              type="text"
                              id="correo"
                              name="password"
                              inputStyle={{ width: 350, borderRadius: 15 }}
                              value={formik.values.password}
                              toggleMask
                              onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                            />
                            <label htmlFor="password">Contraseña</label>
                          </Grid>
                          {getFormErrorMessage('password')}
                        </Grid>

                        <Grid item xs md container direction='row' >
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
                      </Grid>
                    </span>
                    <Grid item xs marginX={15}>
                      <Button
                        type="submit"
                        label="Registrarse"
                        raised
                        rounded
                        sx={{ backgroundColor: '#0f6cbf', p: 1, pr: 2, pl: 2, }}
                      />
                    </Grid>
                  </form> */}


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
                            <label htmlFor="nombres">Nombres</label>
                            <input type='text' id='nombres' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.nombres} name="nombres" onChange={(e) => {
                                formik.setFieldValue('nombres', e.target.value);
                                changed
                              }}/>
                            {/* <InputText type="text" id="inputNombre" style={{ width: 350, borderRadius: 15, padding: 5 }} name="nombres" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('nombres')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type='text' id='apellidos' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.apellidos} name="apellidos" onChange={(e) => {
                                formik.setFieldValue('apellidos', e.target.value);
                                changed
                              }}/>

                            {/* <InputText type="text" id="inputApellidos" style={{ width: 350, borderRadius: 15, padding: 5 }} name="apellidos" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('apellidos')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="correo">Correo / Email</label>
                            <input type='text' id='correo' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.correo} name="correo" onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                                changed
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
                {/* PANTALLA COMPUTADORA */}
                <Paper
                  sx={{
                    display: {
                      mobile: 'none',
                      laptop: 'none',
                      desktop: 'block'
                    },
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
                            <label htmlFor="nombres">Nombres</label>
                            <input type='text' id='nombres' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.nombres} name="nombres" onChange={(e) => {
                                formik.setFieldValue('nombres', e.target.value);
                                changed
                              }}/>
                            {/* <InputText type="text" id="inputNombre" style={{ width: 350, borderRadius: 15, padding: 5 }} name="nombres" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('nombres')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type='text' id='apellidos' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.apellidos} name="apellidos" onChange={(e) => {
                                formik.setFieldValue('apellidos', e.target.value);
                                changed
                              }}/>

                            {/* <InputText type="text" id="inputApellidos" style={{ width: 350, borderRadius: 15, padding: 5 }} name="apellidos" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('apellidos')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="correo">Correo / Email</label>
                            <input type='text' id='correo' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.correo} name="correo" onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                                changed
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
                {/* PANTALLA MOVIL */}
                <Paper
                  sx={{
                    display: {
                      laptop: 'none',

                    },
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
                            <label htmlFor="nombres">Nombres</label>
                            <input type='text' id='nombres' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.nombres} name="nombres" onChange={(e) => {
                                formik.setFieldValue('nombres', e.target.value);
                                changed
                              }}/>
                            {/* <InputText type="text" id="inputNombre" style={{ width: 350, borderRadius: 15, padding: 5 }} name="nombres" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('nombres')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type='text' id='apellidos' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.apellidos} name="apellidos" onChange={(e) => {
                                formik.setFieldValue('apellidos', e.target.value);
                                changed
                              }}/>

                            {/* <InputText type="text" id="inputApellidos" style={{ width: 350, borderRadius: 15, padding: 5 }} name="apellidos" onChange={changed} /> */}

                          </Grid>
                          {getFormErrorMessage('apellidos')}
                        </Grid>
                        <Grid item xs>
                          <Grid >
                            <label htmlFor="correo">Correo / Email</label>
                            <input type='text' id='correo' style={{ width: 350, borderRadius: 15, padding: 5,}} value={formik.values.correo} name="correo" onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                                changed
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

                {/* <Paper
                  sx={{
                    display: {
                      mobile: 'none',
                      laptop: 'none',
                      desktop: 'block'
                    },
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
                  <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <span className="p-float-label">
                      <Toast ref={toast} />
                      <Grid item sm container direction="column" xs spacing={3}>
                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="nombres"
                              name="nombres"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.nombres}
                              onChange={(e) => {
                                formik.setFieldValue('nombres', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('nombres') })}
                            />
                            <label htmlFor="nombres">Nombre</label>
                          </Grid>
                          {getFormErrorMessage('nombres')}
                        </Grid>


                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="apellidos"
                              name="apellidos"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.apellidos}
                              onChange={(e) => {
                                formik.setFieldValue('apellidos', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('apellidos') })}
                            />
                            <label htmlFor="apellidos">Apellido</label>
                          </Grid>
                          {getFormErrorMessage('apellidos')}
                        </Grid>


                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText
                              type="text"
                              id="correo"
                              name="correo"
                              style={{ width: 350, borderRadius: 15 }}
                              value={formik.values.correo}
                              onChange={(e) => {
                                formik.setFieldValue('correo', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('correo') })}
                            />
                            <label htmlFor="correo">Correo</label>
                          </Grid>
                          {getFormErrorMessage('correo')}
                        </Grid>

                        <Grid item xs >
                          <Grid className="p-float-label">
                            <Password
                              type="text"
                              id="correo"
                              name="password"
                              inputStyle={{ width: 350, borderRadius: 15 }}
                              value={formik.values.password}
                              toggleMask
                              onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                              }}
                              className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                            />
                            <label htmlFor="password">Contraseña</label>
                          </Grid>
                          {getFormErrorMessage('password')}
                        </Grid>

                        <Grid item xs md container direction='row' >
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
                      </Grid>
                    </span>
                    <Grid item xs marginX={15}>
                      <Button
                        type="submit"
                        label="Registrarse"
                        raised
                        rounded
                        sx={{ backgroundColor: '#0f6cbf', p: 1, pr: 2, pl: 2, }}
                      />
                    </Grid>
                  </form>
                </Paper> */}


                {/* <Paper
                  sx={{
                    display: {
                      laptop: 'none',
                    },
                    p: 5,
                    margin: 'auto',
                    maxWidth: w,
                    maxHeight: '100%',
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                >

                  <Grid item sm xs={12} container>
                    <Grid item sm container direction="column" xs spacing={1}>


                      <Grid item >
                        <Paper
                          sx={{
                            p: 3,
                            margin: 'auto',
                            maxWidth: (w * .9),
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                          }}
                        >
                          <form onSubmit={saveUser}>
                            <Grid item sm xs={12} container>

                              <Grid item sm container direction="column" xs spacing={3}>
                                <Grid item xs>
                                  <Typography variant="h4" gutterBottom sx={{ minWidth: 200, textAlign: 'center' }}>
                                    Registro
                                  </Typography>
                                </Grid>

                                <Grid item xs>
                                  <Grid className="p-float-label">
                                    <InputText id="inputNombre" style={{ width: (w * .6), borderRadius: 15 }} onChange={changed} />
                                    <label htmlFor="inputNombre">Nombre</label>
                                  </Grid>
                                </Grid>
                                <Grid item xs>
                                  <Grid className="p-float-label">
                                    <InputText id="inputApellidos" style={{ width: (w * .6), borderRadius: 15 }} onChange={changed} />
                                    <label htmlFor="inputApellidos">Apellido</label>
                                  </Grid>
                                </Grid>
                                <Grid item xs>
                                  <Grid className="p-float-label">
                                    <InputText id="inputCorreo" style={{ width: (w * .6), borderRadius: 15 }} onChange={changed} />
                                    <label htmlFor="inputCorreo">Correo / Email</label>
                                  </Grid>
                                </Grid>


                                <Grid item xs>
                                  <Grid className="p-float-label">
                                    <Password id="inputPassword" name="value" mediumRegex inputStyle={{ borderRadius: 15, width: (w * .6) }} onChange={changed} toggleMask />
                                    <label htmlFor="inputPassword">Contraseña</label>
                                  </Grid>
                                </Grid>

                                <Grid item xs md container direction='row' >
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
                                <Grid item xs sm container direction='row' >
                                  <Grid item xs></Grid>
                                  <Box
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, paddingTop: 1 }}
                                  >

                                    <Link

                                      onClick={saveUser}
                                      href='login'
                                      variant="solid"
                                      color="primary"
                                      level='h5'
                                      sx={{ '--Link-gap': '0.5rem', pr: 2, pl: 2 }}
                                    >
                                      Ingresar
                                    </Link>
                                  </Box>
                                  <Grid item xs ></Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </form>
                        </Paper>
                      </Grid>


                    </Grid>
                  </Grid>
                </Paper>    */}

      </ThemeProvider>

    </div >
  )
}



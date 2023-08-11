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

export const Register = () => {
  const { form, changed } = useFormRegister({});
  const { data, setData } = useState(null);

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


  const saveUser = async (data) => {

    let newUser = data;
    console.log(data);

    fetch(Global.url + 'usuario/registrar', {
      method: 'POST',
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(newUser)
    }).then(() => {
      console.log('Usuario Agregado');
    })

  }

  // FORMIK
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: 'success', summary: 'Datos guardados',
      detail: formik.values.nombres
    });
  };

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
      data && show(data);
      saveUser(data)
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
            maxWidth: '100%',
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


                  {/* <form onSubmit={saveUser}>
                    <Grid item sm xs={12} container>

                      <Grid item sm container direction="column" xs spacing={3}>
                        <Grid item xs>
                          <Typography variant="h4" gutterBottom sx={{ minWidth: 200, textAlign: 'center' }}>
                            Registro
                          </Typography>
                        </Grid>

                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText type="text" id="inputNombre" style={{ width: 350, borderRadius: 15, padding: 5 }} name="nombres" onChange={changed} />
                            <label htmlFor="inputNombre">Nombre</label>
                          </Grid>
                        </Grid>
                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText type="text" id="inputApellidos" style={{ width: 350, borderRadius: 15, padding: 5 }} name="apellidos" onChange={changed} />
                            <label htmlFor="inputApellidos">Apellido</label>
                          </Grid>
                        </Grid>
                        <Grid item xs>
                          <Grid className="p-float-label">
                            <InputText id="inputCorreo" style={{ width: 350, borderRadius: 15, padding: 5 }} name="correo" onChange={changed} />
                            <label htmlFor="inputCorreo">Correo / Email</label>
                          </Grid>
                        </Grid>

                        <Grid item xs>
                          <Grid className="p-float-label">
                            <Password type="password" id="inputPassword" inputStyle={{ borderRadius: 10, width: 350, padding: 5 }} name="password" onChange={changed} />
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

                          <Grid item xs marginX={15}>
                            <NavLink to="/cma/login">
                              <Link
                                component="button"
                                underline="none"
                                sx={{ backgroundColor: '#0f6cbf', p: 1, pr: 2, pl: 2, borderRadius: 15, }}
    
                              >
                                <Typography sx={{ color: 'white' }}>
                                  Registrarse
                                </Typography>

                              </Link>
                            </NavLink>
                          </Grid>



                        </Grid>
                      </Grid>
                    </Grid>
                  </form> */}
                </Paper>
              </Grid>


            </Grid>
          </Grid>
        </Paper>

        <Paper
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
          {/* CONTENEDOR MAYOR DE FORMULARIO */}
          <Grid item sm xs={12} container>
            <Grid item sm container direction="column" xs spacing={1}>

              {/* SECCION 1 DE FORMULARIO */}
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
                      {/* FORMULARIO DE PERSONAL */}
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
                            {/* <input type='submit' /> */}
                            <Link
                              // href="login"
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
              {/* SECCION 1 DE FORMULARIO */}

            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>

    </div >
  )
}



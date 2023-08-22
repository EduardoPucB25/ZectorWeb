
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Box, ThemeProvider, Avatar, CardMedia } from '@mui/material';

import { Card, CardContent, Divider } from '@mui/material';

import { theme } from '../styles/responsiveScreens';

// IMPORTS PRIMEREACT
import { Button } from 'primereact/button';
import { useFormRegister } from '../../../hooks/use-form-register';
// import ImageUser from '../../../../assets/images/doctor3.png'
import ImageUser from '../../../assets/images/doctor1.jpg'
import PortadaUser from '../../../assets/images/portada2.jpg'
// Icons mui
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { grey, red, blue } from '@mui/material/colors';


export const MiPerfil = () => {

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

  const Responsive = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('mobile')]: {
      color: grey
    },
    [theme.breakpoints.down('tablet')]: {
      color: blue
    },
    [theme.breakpoints.down('desktop')]: {
      color: red
    }
  }))



  const [loadingCall, setLoadingCall] = useState(false);
  const [loadingWP, setLoadingWP] = useState(false);


  const loadC = () => {
    setLoadingCall(true);
    setTimeout(() => {
      setLoadingCall(false);
    }, 4000);
  };

  const loadW = () => {
    setLoadingWP(true);
    setTimeout(() => {
      setLoadingWP(false);
    }, 4000);
  };

  return (
    <ThemeProvider theme={theme}>

      <Paper
        sx={{
          display: {
            laptop: 'none'
          },
          margin: 'auto',
          width: w,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <CardContent sx={{
          width: w,
          p: 0,
          margin: 'auto'
        }}>
          <CardMedia>
            <img
              width={w}
              height={(w * .20)}
              src={PortadaUser}
              loading="lazy"
              alt=""
            />

          </CardMedia>
          <Avatar
            alt="Remy Sharp"
            src={ImageUser}
            sx={{
              height: (w * .20),
              width: (w * .20),
              zIndex: 'tooltip',
              mt: 2,
              marginInline: (w * .050),
            }}
          />
          <Typography sx={{
            margin: 1,
            display: {
              laptop: 'none'
            }
          }} variant="h6" fontSize="sm" textAlign={'center'} >
            Dr. Alberto Perez Mobile
          </Typography>


          <Typography sx={{
            margin: 1,
            marginBottom: 3,
            color: 'primary.main',
            display: {
              laptop: 'none'
            }
          }} variant="h6" fontSize="sm" textAlign={'center'} >
            Medicina Interna / Medicina Critica / Terapia intensiva
          </Typography>

          <Divider />

          {/* CEDULA */}
          <Paper
            sx={{
              p: 1,
              margin: 'auto',
              marginInline: 1.5,
              marginBlock: 1,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container >
              <Grid item xs={12} container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                    Cedula Especialidad 516164 / 51651
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography xsgutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                    Cedula Especialidad 516164 / 51651
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            sx={{
              display: {
                laptop: 'none'
              },
              p: 1,
              marginInline: 1.5,
              marginBlock: 1,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container >
              <Grid item xs={12} container direction="column" spacing={5}>
                <Grid item xs>
                  <Typography variant="h6" fontSize="md" textAlign={'center'} >
                    Especialista en diagnostico y tratamiento médico, asi como el seguimiento de enfermedades, crónicas y sus complicaciones

                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>



          <Paper
            sx={{
              p: 0,
              marginInline: 1.5,
              marginBlock: 1,
              maxWidth: { w },
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            
              
              <Grid item xs container direction='row' paddingY={2} >
                      <Grid item >
                        <Button
                          
                          rounded
                          outlined
                          severity='info'
                          raised
                          loading={loadingCall} onClick={loadC}
                        >
                          <LocalPhoneIcon sx={{ fontSize: 15 }} color="white" />
                          <Typography variant="body2"  >
                            Llamar
                          </Typography>

                        </Button>                            
                      </Grid>
                      <Grid item >
                      <Button
                        margin='auto'
                        outlined
                        rounded
                        severity='secondary'
                        raised
                        loading={loadingWP} onClick={loadW}

                      >
                        <WhatsAppIcon sx={{ fontSize: 20 }} color="success" />
                        <Typography variant="body2" >
                          WhatsApp
                        </Typography>
                      </Button>
                      </Grid>                      
                    
                  
                </Grid>
              


            
          </Paper>

          {/* DESCRIPCION */}
          <Paper
            sx={{
              display: {
                laptop: 'none'
              },
              p: 0,
              marginInline: 1.5,
              marginBlock: 1,
              maxWidth: { w },
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            
              <Grid item xs container direction='column' paddingY={2}>
                <Grid item xs>

                  
                    <Grid item xs container direction='row' paddingX={1}>
                      
                        <Grid container spacing={2} padding={2}>
                          <Grid item >
                            <AccountBoxIcon sx={{ fontSize: 40 }} />
                          </Grid>
                          <Grid item >
                            <Typography fontSize="md" variant='h5' sx={{ margin: 1 }}>
                              Consultorio 204
                            </Typography>
                            <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                              Piso 2, Consultorio 204
                            </Typography>
                          </Grid>
                        </Grid>
                      
                    </Grid>
                  
                  
                    <Grid item xs container direction='row' paddingX={1}>
                     
                        <Grid container spacing={2} padding={2}>
                          <Grid item >
                            <ScheduleIcon sx={{ fontSize: 40 }} />
                          </Grid>
                          <Grid item >
                            <Typography fontSize="md" variant='h5' sx={{ margin: 1 }}>
                              Horarios
                            </Typography>
                            <Typography fontSize="md" variant='h6' sx={{ margin: 1 }}>
                              Cita previa
                            </Typography>
                            <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                              10:00 am - 2:00 pm
                            </Typography>
                            <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                              4:00 pm - 6:00 pm
                            </Typography>
                          </Grid>
                        </Grid>
                      
                    </Grid>
                  
                </Grid>
              </Grid>
            
          </Paper>

          {/* CEDULA */}
          <Paper
            sx={{
              display: {
                laptop: 'none'
              },
              p: 0,
              marginInline: 1.5,
              marginBlock: 1,
              maxWidth: { w },
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction='row' paddingX={0}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid xs item >
                  <Typography variant="h5" fontWeight="md" padding={4} textColor="text.secondary">
                    Servicios
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Grid xs item >
                  <Button
                    rounded
                    text
                    severity='secondary'

                  >
                    <ArrowDropDownIcon sx={{ fontSize: 60 }} />
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Paper>

          {/* CEDULA */}
          <Paper
            sx={{
              p: 0,
              marginInline: 1.5,
              marginBlock: 1,
              maxWidth: { w },
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction='column' paddingX={0}>
              <Box sx={{ flexGrow: 0 }}>
                <Grid item xs container direction='row' paddingX={0}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid item >
                      <Typography variant="h5" fontWeight="md" padding={3} textColor="text.secondary">
                        Formación academica
                      </Typography>
                    </Grid>
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <Grid item >
                      <Button
                        rounded
                        text
                        severity='secondary'

                      >
                        <ArrowDropDownIcon sx={{ fontSize: 60 }} />
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h5' sx={{ margin: 2 }}>
                    Universidad
                  </Typography>

                </Grid>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                    C. 35 #546 x 46 y 48 Col. Alguna Colonia
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                    Dato Libre
                  </Typography>
                  <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                    Dato Libre
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Paper>

        </CardContent>
      </Paper>

      {/* <CardContent sx={{ padding: 0 }}>
              <CardMedia>
                <img
                  width={w}
                  height={(w * .15)}
                  src={PortadaUser}
                  loading="lazy"
                  alt=""
                />

              </CardMedia>
              <Avatar
                alt="Remy Sharp"
                src={ImageUser}
                sx={{
                  height: (w * .15),
                  width: (w * .15),
                  zIndex: 'tooltip',
                  mt: 5,
                  marginInline:  (w * .035),
                }}
              />
            </CardContent> */}



      {/* Contenido Laptop */}

      <Paper
        sx={{
          display: {
            mobile: 'none',
            laptop: 'none',
            desktop: 'block'
          },

          margin: 'auto',
          width: (w * .7),
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        {/* Comtenido Pc */}
        <CardContent sx={{
          width: (w * .7),
          p: 0,
          margin: 'auto'
        }}>

          <CardMedia >
            <img
              width={w * .7}
              height={(w * .15)}
              src={PortadaUser}
              loading="lazy"
              alt=""
            />

          </CardMedia>
          <Avatar
            alt="Remy Sharp"
            src={ImageUser}
            sx={{
              height: (w * .15),
              width: (w * .15),
              zIndex: 'tooltip',
              mt: 5,
              marginInline: (w * .035),
            }}
          />
          <Paper
            elevation={0}
            sx={{
              p: 2,
              marginBottom: 3,
              marginTop: 3,
              margin: 'auto',
              width: (w * .6),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Typography sx={{

            }} variant="h4" fontSize="md" textAlign={'center'}>
              Dr. Alberto Perez PC
            </Typography>
            <Typography sx={{

              marginBottom: 3,
              color: 'primary.main',
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              }
            }} variant="h5" fontSize="md" textAlign={'center'}>
              Medicina Interna / Medicina Critica / Terapia intensiva
            </Typography>
          </Paper>


          <Divider />


          {/* CEDULA */}
          <Paper
            sx={{
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container >
              <Grid item xs={12} container direction="row" spacing={5}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                    Cedula Especialidad 516164 / 51651
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography xsgutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                    Cedula Especialidad 516164 / 51651
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>



          {/* DESCRIPCION */}
          <Paper
            sx={{
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              },
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container >
              <Grid item xs={12} container direction="column" spacing={5}>
                <Grid item xs>
                  <Typography variant="h6" fontSize="md" textAlign={'left'} >
                    Especialista en diagnostico y tratamiento médico, asi como el seguimiento de enfermedades, crónicas y sus complicaciones
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>



          {/* Botones */}
          <Paper
            sx={{
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container >
              <Grid item xs container direction='row' paddingX={10}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Button
                      rounded
                      outlined
                      severity='info'
                      raised
                      loading={loadingCall} onClick={loadC}
                    >
                      <LocalPhoneIcon sx={{ fontSize: 40 }} color="white" />
                      <Typography variant="h5" padding={1} >
                        Llamar
                      </Typography>

                    </Button>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Grid item >
                    <Button
                      outlined
                      rounded
                      severity='secondary'
                      raised
                      loading={loadingWP} onClick={loadW}

                    >
                      <WhatsAppIcon sx={{ fontSize: 40 }} color="success" />
                      <Typography variant="h5" padding={1}>
                        WhatsApp
                      </Typography>
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>



          {/* Horarios */}
          <Paper
            sx={{
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              },
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction='row' paddingX={3}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                  <Grid item >
                    <AccountBoxIcon sx={{ fontSize: 60 }} />
                  </Grid>
                  <Grid item >
                    <Typography fontSize="md" variant='h4' sx={{ margin: 1 }}>
                      Consultorio
                    </Typography>
                    <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                      Piso 2, Consultorio 204
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} padding={2}>
                  <Grid item >
                    <ScheduleIcon sx={{ fontSize: 60 }} />
                  </Grid>
                  <Grid item >
                    <Typography fontSize="md" variant='h4' sx={{ margin: 1 }}>
                      Horario
                    </Typography>
                    <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                      Lunes a Viernes | 9:00 am - 5:00 pm
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

          </Paper>



          {/* Servicios */}
          <Paper
            sx={{
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              },
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction='row' paddingX={3}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                  <Grid item >
                    <Typography fontSize="md" variant='h4' sx={{ margin: 1 }}>
                      Servicios
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Button
                      rounded
                      text
                      severity='secondary'

                    >
                      <ArrowDropDownIcon sx={{ fontSize: 80 }} />
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item >
                    <ScheduleIcon sx={{ fontSize: 60 }} />
                  </Grid>
                  <Grid item >
                    <Typography fontSize="md" variant='h4' sx={{ margin: 1 }}>
                      Horario
                    </Typography>
                    <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                      Lunes a Viernes | 9:00 am - 5:00 pm
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs container direction='row' paddingX={3}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid item >
                  <Typography variant="h4" fontWeight="md" textColor="text.secondary">
                    Servicios
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid item >
                  <Button
                    rounded
                    text
                    severity='secondary'

                  >
                    <ArrowDropDownIcon sx={{ fontSize: 80 }} />
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Paper>



          {/* Formacion Academica */}
          <Paper
            sx={{
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              },
              p: 3,
              margin: 'auto',
              marginBlock: 2,
              maxWidth: (w * .65),
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction='column' paddingX={1}>
              <Box sx={{ flexGrow: 0 }}>
                <Grid item xs container direction='row' paddingX={0}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid item >
                      <Typography variant="h4" fontWeight="md" padding={4} textColor="text.secondary">
                        Formación academica
                      </Typography>
                    </Grid>
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <Grid item >
                      <Button
                        rounded
                        text
                        severity='secondary'

                      >
                        <ArrowDropDownIcon sx={{ fontSize: 80 }} />
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h4' sx={{ margin: 2 }}>
                    Universidad
                  </Typography>

                </Grid>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                    C. 35 #546 x 46 y 48 Col. Alguna Colonia
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Grid item paddingX={4}>
                  <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                    Dato Libre
                  </Typography>
                  <Typography fontSize="md" variant='h5' sx={{ color: 'primary.main', margin: 2 }}>
                    Dato Libre
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Paper>

        </CardContent>

      </Paper>

    </ThemeProvider>

  )
}



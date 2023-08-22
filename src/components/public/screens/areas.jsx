import React, { Component, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Box, ThemeProvider, Avatar, CardMedia } from '@mui/material';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import { Card, CardContent, Divider } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import Chip from '@mui/joy/Chip';
import Visibility from '@mui/icons-material/Visibility';
import { theme } from './responsiveAreas';

// IMPORTS PRIMEREACT
import { Button } from 'primereact/button';
// import ImageUser from '../../../../assets/images/doctor3.png'
import ImageDr1 from '../../../assets/images/doctor1.jpg'
import ImageDr2 from '../../../assets/images/doctor2.jpg'
import PortadaUser from '../../../assets/images/portada2.jpg'

// Icons mui
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { grey, red, blue } from '@mui/material/colors';

import cardDr from '../../public/components/cardDr';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const Areas = () => {

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
          p: 0,
          width: w,
          margin: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Card >
          <CardContent sx={{ padding: 0 }}>
            <CardMedia>
              <img
                width={w}
                height={(w * .2)}
                src={PortadaUser}
                loading="lazy"
                alt=""
              />

            </CardMedia>

          </CardContent>

          <CardContent sx={{
            display: {
              laptop: 'none'
            }
          }}>

            <Typography sx={{
              margin: 1,
              display: {
                laptop: 'none'
              }
            }} variant="h5" fontSize="sm" textAlign={'center'} >
              Consultorio 204
            </Typography>


            <Typography sx={{
              margin: 1,
              marginBottom: 3,
              color: 'primary.main',
              display: {
                laptop: 'none'
              }
            }} variant="body1" fontSize="sm" textAlign={'center'} >
              Bienvenido a consultorio 200, seleccione su médico para mayor información
            </Typography>

            <Divider />

            {/* CEDULA */}
            <Paper
              sx={{
                borderRadius: 6,
                p: 0,
                margin: 'auto',
                marginBlock: 2,
                marginTop: 2,
                flexGrow: 1,
              }}
            >
              <Grid xs container direction="row" >
                <Box item xs
                  sx={{
                    margin: 2
                  }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={ImageDr1}
                    sx={{
                      height: 50,
                      width: 50,
                      zIndex: 'tooltip',
                    }}
                  />
                </Box>
                <Box item xs
                  sx={{
                    margin: 1
                  }}>
                  <Typography gutterBottom variant="h6" fontSize="sm" textAlign={'center'} sx={{ color: 'gray' }}>
                    Dr. Alberto Perez
                  </Typography>
                  <Typography gutterBottom variant="body1" fontSize="sm" textAlign={'left'} sx={{ color: 'gray' }}>
                    Medicina interna
                  </Typography>
                  <Typography gutterBottom variant="body1" fontSize="sm" textAlign={'left'} sx={{ color: 'gray' }}>
                    Terapia Intensiva
                  </Typography>
                </Box>
                <Box item xs
                  sx={{
                    margin: 2
                  }}>

                </Box>
              </Grid>
            </Paper>
            

            {/* Card de Personal */}
            <Paper
            elevation={0}
              sx={{
                borderRadius: 6,
                p: 0,
                margin: 'auto',
                marginBlock: 2,
                marginTop: 2,
                flexGrow: 1,
              }}
            >
            <Button item
                rounded
                outlined
                severity='secondary'
              >
                  <Grid xs container direction="row" sx={{ width: (w * .85)}}>
                    <Box item
                      sx={{
                        margin: 2
                      }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={ImageDr1}
                        sx={{
                          height: 60,
                          width: 60,
                          zIndex: 'tooltip',
                        }}
                      />
                    </Box>
                    <Box item
                      sx={{
                        margin: 2
                      }}>
                      <Typography gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                        Dr. Alberto Perez
                      </Typography>
                      <Typography gutterBottom variant="body1" fontSize="md" textAlign={'left'} sx={{ color: 'gray' }}>
                        Especialista en pediatria
                      </Typography>
                    </Box>
                  </Grid>                  
              </Button>             
            
            </Paper>         

            <Button item
                rounded
                outlined
                severity='secondary'
              >
                  <Grid xs container direction="row" >
                    <Box item
                      sx={{
                        margin: 2
                      }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={ImageDr1}
                        sx={{
                          height: 50,
                          width: 50,
                          zIndex: 'tooltip',
                        }}
                      />
                    </Box>
                    <Box item
                      sx={{
                        margin: 2
                      }}>
                      <Typography gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                        Dr. Alberto Perez
                      </Typography>
                      <Typography gutterBottom variant="body1" fontSize="md" textAlign={'left'} sx={{ color: 'gray' }}>
                        Especialista en pediatria
                      </Typography>
                    </Box>
                  </Grid>                  
              </Button>

            <Paper
              elevation={0}
              sx={{
                display: {
                  laptop: 'none'
                },
                p: 0,
                margin: 'auto',
                marginBlock: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Button item
                rounded
                outlined
                severity='secondary'
              >
                <Grid xs container direction="row" >
                  <Box item
                    sx={{
                      margin: 2
                    }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={ImageDr2}
                      sx={{
                        height: 50,
                        width: 50,
                        zIndex: 'tooltip',
                      }}
                    />
                  </Box>
                  <Box item
                    sx={{
                      margin: 2
                    }}>
                    <Typography gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                      Dra. Alejandra Caceres
                    </Typography>
                    <Typography gutterBottom variant="body1" fontSize="md" textAlign={'left'} sx={{ color: 'gray' }}>
                      Especialista en pediatria
                    </Typography>
                  </Box>
                </Grid>
              </Button>

            </Paper>





            {/* <Paper
                  sx={{
                    display: {
                      laptop: 'none'
                    },
                    p: 3,
                    marginBottom: 3,
                    marginTop: 3,
                    maxWidth: { w },
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
                </Paper> */}

            {/* DESCRIPCION */}
            <Paper
              sx={{
                display: {
                  laptop: 'none'
                },
                p: 0,
                marginBlock: 3,
                marginTop: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs container direction='column' paddingY={0}>
                  <Grid item xs>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid item xs container direction='row' paddingX={1}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2} padding={2}>
                            <Grid item >
                              <AccountBoxIcon sx={{ fontSize: 40 }} />
                            </Grid>
                            <Grid item >
                              <Typography fontSize="md" variant='h6' sx={{ margin: 1 }}>
                                Consultorio
                              </Typography>
                              <Typography fontSize="md" variant='body1' sx={{ color: 'primary.main', margin: 1 }}>
                                Piso 2, Consultorio 204
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid item xs container direction='row' paddingX={1}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2} padding={2}>
                            <Grid item >
                              <ScheduleIcon sx={{ fontSize: 40 }} />
                            </Grid>
                            <Grid item >
                              <Typography fontSize="md" variant='h5' sx={{ margin: 1 }}>
                                Horarios
                              </Typography>
                              <Typography fontSize="md" variant='body1' sx={{ margin: 1 }}>
                                Cita previa
                              </Typography>
                              <Typography fontSize="md" variant='body1' sx={{ color: 'primary.main', margin: 2 }}>
                                10:00 am - 2:00 pm
                              </Typography>
                              <Typography fontSize="md" variant='body1' sx={{ color: 'primary.main', margin: 2 }}>
                                4:00 pm - 6:00 pm
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Box>
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
                marginBottom: 3,
                marginTop: 3,
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
                display: {
                  laptop: 'none'
                },
                p: 0,

                marginBottom: 3,
                marginTop: 3,
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
                          Documentos y Avisos
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
                      Requisitos Previos a citas
                    </Typography>

                  </Grid>
                  <Grid item paddingX={4}>
                    <Button
                      rounded
                      text
                      severity='secondary'

                    >
                      <ArrowDropDownIcon sx={{ fontSize: 60 }} />
                      <Typography fontSize="md" variant='h6' sx={{ color: 'severity', margin: 2 }}>
                        Requisitos.PDF
                      </Typography>
                    </Button>
                    <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                      C. 35 #546 x 46 y 48 Col. Alguna Colonia
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Grid item paddingX={4}>
                    <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                      Realizar
                    </Typography>
                    <Typography fontSize="md" variant='h6' sx={{ color: 'primary.main', margin: 2 }}>
                      Dato Libre
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
            </Paper>

          </CardContent>

          {/* Contenido Laptop */}
          <CardContent sx={{
            display: {
              mobile: 'none',
              laptop: 'block',
              desktop: 'none'
            }
          }}>


            <Typography sx={{
              margin: 1,
              marginBottom: 3,
              display: {
                mobile: 'none',
                laptop: 'block',
                desktop: 'none'
              }
            }} variant="h4" fontSize="md" textAlign={'center'}>
              Dr. Marcos Laptop
            </Typography>


            {/* <Typography variant="h3" fontSize="md" textAlign={'center'}>
                      {w} px
                    </Typography> */}


            <Typography sx={{
              margin: 1,
              marginBottom: 3,
              color: 'primary.main',
              display: {
                mobile: 'none',
                laptop: 'block',
                desktop: 'none'
              }
            }} variant="h4" fontSize="md" textAlign={'center'}>
              Medicina Interna / Medicina Critica / Terapia intensiva
            </Typography>


            <Divider />


            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 3,
                margin: 'auto',
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
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
                    <Typography xs gutterBottom variant="h6" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
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
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 3,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs={12} container direction="column" spacing={5}>
                  <Grid item xs>
                    <Typography variant="h5" fontSize="md" textAlign={'left'} >
                      Especialista en diagnostico y tratamiento médico, asi como el seguimiento de enfermedades, crónicas y sus complicaciones
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
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 3,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs container direction='row' paddingX={25}>
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
                        <Typography variant="h4" padding={1} >
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
                        <Typography variant="h4" padding={1}>
                          WhatsApp
                        </Typography>
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>



            {/* DESCRIPCION */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 3,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs container direction='row' paddingX={1}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} padding={2}>
                      <Grid item >
                        <AccountBoxIcon sx={{ fontSize: 50 }} />
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
                        <ScheduleIcon sx={{ fontSize: 50 }} />
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
              </Grid>
            </Paper>



            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 1,

                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item xs container direction='row' paddingX={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography variant="h4" fontWeight="lg" padding={4} textColor="text.secondary">
                      Servicios
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
            </Paper>



            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'block',
                  desktop: 'none'
                },
                p: 1,

                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item xs container direction='row' paddingX={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography variant="h4" fontWeight="lg" padding={4} textColor="text.secondary">
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
            </Paper>

          </CardContent>

          <CardContent sx={{
            margin: 13,
            display: {
              mobile: 'none',
              laptop: 'none',
              desktop: 'block'
            }
          }}>

            <Typography sx={{
              margin: 1,
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              }
            }} variant="h3" fontSize="md" textAlign={'center'}>
              Dr. Marcos PC
            </Typography>



            <Typography sx={{
              margin: 1,
              marginBottom: 3,
              color: 'primary.main',
              display: {
                mobile: 'none',
                laptop: 'none',
                desktop: 'block'
              }
            }} variant="h3" fontSize="md" textAlign={'center'}>
              Medicina Interna / Medicina Critica / Terapia intensiva
            </Typography>


            <Divider />


            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'none',
                  desktop: 'block'
                },
                p: 3,
                marginBottom: 3,
                marginTop: 3,
                margin: 'auto',
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs={12} container direction="row" spacing={10}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
                      Cedula Especialidad 516164 / 51651
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography xsgutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'gray' }}>
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
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs={12} container direction="column" spacing={5}>
                  <Grid item xs>
                    <Typography variant="h4" fontSize="md" textAlign={'left'} >
                      Especialista en diagnostico y tratamiento médico, asi como el seguimiento de enfermedades, crónicas y sus complicaciones
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
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container >
                <Grid item xs container direction='row' paddingX={35}>
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
                        <Typography variant="h4" padding={1} >
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
                        <Typography variant="h4" padding={1}>
                          WhatsApp
                        </Typography>
                      </Button>
                    </Grid>
                  </Box>
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
                p: 1,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item xs container direction='row' paddingX={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} padding={2}>
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



            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'none',
                  desktop: 'block'
                },
                p: 1,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item xs container direction='row' paddingX={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography variant="h4" fontWeight="md" padding={4} textColor="text.secondary">
                      Servicios
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
            </Paper>



            {/* CEDULA */}
            <Paper
              sx={{
                display: {
                  mobile: 'none',
                  laptop: 'none',
                  desktop: 'block'
                },
                p: 1,
                marginBottom: 3,
                marginTop: 3,
                maxWidth: { w },
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
        </Card>
      </Paper>

    </ThemeProvider>

  )
}



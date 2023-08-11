import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, ThemeProvider } from '@mui/material';

import { styled } from '@mui/material/styles';

import { Button } from 'primereact/button';
import { grey } from '@mui/material/colors';
import { theme } from '../styles/responsiveScreens';
// ICONS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// STYLES
import './footer.css'


export default function Footer() {


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
    [theme.breakpoints.down('table')]: {
      color: grey
    },
    [theme.breakpoints.down('desktop')]: {
      color: grey
    }
  }))
  // NOMBRE DEL USUARIO


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <Responsive>
        <Paper
          sx={{
            display: {
              laptop: 'none',
            },
            p: 2,
            margin: 'auto',
            width: w,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#1f3c59',
          }}
        >
          <Grid container >
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs container direction='row' spacing={1}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography gutterBottom variant="body1" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      Numero de contacto
                    </Typography>
                    <Typography gutterBottom variant="body1" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      9994654661
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography gutterBottom variant="body1" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      Numero de contacto
                    </Typography>
                    <Typography gutterBottom variant="body1" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      9994654661
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                  Redes Sociales
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item container direction={'row'} paddingX={10}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Button
                        rounded
                        severity='info'
                        raised
                      >
                        <FacebookIcon sx={{ fontSize: 30 }} />
                      </Button>
                      <Grid item >
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid item >
                        <Button
                          rounded
                          severity='danger'
                          raised
                        >
                          <InstagramIcon sx={{ fontSize: 30 }} />
                        </Button>
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                      <Grid item >
                        <Button
                          rounded
                          severity='success'
                          raised
                        >
                          <WhatsAppIcon sx={{ fontSize: 30 }} />
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs>
                <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                  www.zector/cmaOficial.com Mobile
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            display: {
              mobile: 'none',
              laptop: 'block',
              desktop: 'none'
            },
            p: 3,
            margin: 'auto',
            width: w,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#1f3c59',
          }}
        >
          <Grid container >
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs container direction='row' spacing={1}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      Numero de contacto
                    </Typography>
                    <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      9994654661
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item >
                    <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      Numero de contacto
                    </Typography>
                    <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                      9994654661
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                  Redes Sociales
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item container direction={'row'} paddingX={40}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Button
                        rounded
                        severity='info'
                        raised
                      >
                        <FacebookIcon sx={{ fontSize: 30 }} />
                      </Button>
                      <Grid item >
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid item >
                        <Button
                          rounded
                          severity='danger'
                          raised
                        >
                          <InstagramIcon sx={{ fontSize: 30 }} />
                        </Button>
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                      <Grid item >
                        <Button
                          rounded
                          severity='success'
                          raised
                        >
                          <WhatsAppIcon sx={{ fontSize: 30 }} />
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs>
                <Typography gutterBottom variant="h5" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                  www.zector/cmaOficial.com Laptop
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            display: {
              mobile: 'none',
              laptop: 'none',
              desktop: 'block'
            },
            p: 3,
            margin: 'auto',
            width: ( w * .7),
            height: (w * .15),
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#1f3c59',
          }}
        >
          <Grid container >
            <Grid item xs={12} container direction="column" >
              <Grid item xs container direction='row' padding={1}>
                <Box sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    Numero de contacto
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    9994654661
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    Numero de contacto
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    9994654661
                  </Typography>

                </Box>
                <Box sx={{ flexGrow: 1, textAlign: 'left' }}>

                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    Quienes somos
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    Datos de desarrollador
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>
                    developer.312@outlook.com
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize="md" sx={{ color: 'white' }}>

                  </Typography>

                </Box>

                <Box sx={{ flexGrow: 0 }}>
                        <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                          Redes Sociales
                        </Typography>
                      <Grid item container direction={'row'} paddingX={0}>
                        <Button
                          rounded
                          severity='danger'
                          raised
                        >
                          <InstagramIcon sx={{ fontSize: 25 }} />

                        </Button>
                        <Button
                          rounded
                          severity='info'
                          raised
                        >
                          <FacebookIcon sx={{ fontSize: 20 }} />

                        </Button>
                        <Button
                          rounded
                          severity='success'
                          raised
                        >
                          <WhatsAppIcon sx={{ fontSize: 25 }} />

                        </Button>
                      </Grid>
                    </Box>

              </Grid>

              {/* <Grid item xs padding={1}>
                <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                  Información
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid item container direction={'row'} paddingX={30}>
                    <Box sx={{ flexGrow: 1 }}>


                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid item >

                      </Grid>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white' }}>
                          Redes Sociales
                        </Typography>
                      <Grid item container direction={'row'} paddingX={0}>
                        <Button
                          rounded
                          severity='danger'
                          raised
                        >
                          <InstagramIcon sx={{ fontSize: 25 }} />

                        </Button>
                        <Button
                          rounded
                          severity='info'
                          raised
                        >
                          <FacebookIcon sx={{ fontSize: 20 }} />

                        </Button>
                        <Button
                          rounded
                          severity='success'
                          raised
                        >
                          <WhatsAppIcon sx={{ fontSize: 25 }} />

                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Grid> */}

              <Grid item xs>
                <Typography gutterBottom variant="body2" fontSize="md" textAlign={'center'} sx={{ color: 'white', padding: 1 }}>
                  www.zector/cmaOficial.com PC
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Responsive>
    </ThemeProvider>
  );
}
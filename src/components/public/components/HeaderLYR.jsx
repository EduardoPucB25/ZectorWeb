import React, { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/joy/Box';
import Link from '@mui/material/Link';
import { Button } from 'primereact/button';
import { ThemeProvider } from '@mui/material';
import LogoZector from '../../../assets/images/LogoZector.png'

import { Typography } from '@mui/material';
import { theme } from '../styles/responsiveScreens';



export default function HeaderLYR() {

   const [w, setW] = useState(window.innerWidth);
   useEffect(() => {
      const handleResizew = () => {
         setW(window.innerWidth);
      };
      window.addEventListener('resize', handleResizew);
      return () => {
         window.removeEventListener('resize', handleResizew);
      };
   }, []);

   const [h, setH] = useState(window.innerHeight);
   useEffect(() => {
      const handleResizeh = () => {
         setH(window.innerHeight);
      };
      window.addEventListener('resize', handleResizeh);
      return () => {
         window.removeEventListener('resize', handleResizeh);
      };
   }, []);


   const [anchorEl, setAnchorEl] = React.useState(null);
   return (
      <ThemeProvider theme={theme}>
         <Grid container sx={{ display: 'flex', height: (h * .11), width: w, backgroundColor: '#1f3c59', }}>
            <Grid item xs container direction='row' spacing={1} sx={{

            }}>
               <Box sx={{ flexGrow: 4 }}>
                  <Grid item xs>
                     <img alt="logo" src={LogoZector} height="120" className="p-mr-2"></img>
                  </Grid>                  
               </Box>

               <Box sx={{ flexGrow: .5, paddingTop: 5}}>
                 <Grid item xs>
                     <NavLink to="/cma/login">
                        <Button
                           underline="none"
                           variant="solid"
                           color="neutral"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                        >
                           Ingresar
                        </Button>
                     </NavLink>
                  </Grid>                  
               </Box>
               <Box sx={{ flexGrow: .5, paddingTop: 5}}>
                  <Grid item xs>
                     <NavLink to="/cma/register">
                        <Button

                           underline="none"
                           variant="solid"
                           color="neutral"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                        >
                           Registrarse
                        </Button>
                     </NavLink>
                  </Grid>                  
               </Box>               
 

               
            </Grid>

            {/* <Grid item xs container direction="row" >
               <Grid item xs>
                  <img alt="logo" src={LogoZector} height="120" className="p-mr-2"></img>

               </Grid>
               <Grid item xs={7}>

               </Grid>


               <Grid item xs container direction="row" paddingTop={4} >
                  <Grid item xs>
                     <NavLink to="/cma/login">
                        <Button

                           underline="none"
                           variant="solid"
                           color="neutral"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                        >
                           Ingresar
                        </Button>
                     </NavLink>
                  </Grid>
                  <Grid item xs>
                     <NavLink to="/cma/register">
                        <Link

                           underline="none"
                           variant="solid"
                           color="neutral"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                        >
                           Registrarse
                        </Link>
                     </NavLink>
                  </Grid>
               </Grid>
            </Grid> */}

         </Grid>
      </ThemeProvider>


   );
}
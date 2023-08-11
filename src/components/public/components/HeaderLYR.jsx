import React, { Component, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';


import LogoZector from '../../../assets/images/LogoZector.png'
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';




export default function HeaderLYR() {

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
   const [anchorEl, setAnchorEl] = React.useState(null);
   return (
      <React.Fragment>
         <Grid container sx={{ display: 'flex', minHeight: 100, maxHeight: 100, width: '100%', backgroundColor: '#1f3c59', }}>

            <Grid item xs container direction="row" >
               <Grid item xs>
                  <img alt="logo" src={LogoZector} height="120" className="p-mr-2"></img>

               </Grid>
               <Grid item xs={7}>

               </Grid>

               <Grid item xs container direction="row" paddingTop={4} >
                  <Grid item xs>
                     <NavLink to="/cma/login">
                        <Link
                           to="login"
                           underline="none"
                           variant="solid"
                           color="neutral"
                           level='h6'
                           sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                        >
                           Ingresar
                        </Link>
                     </NavLink>
                  </Grid>
                  <Grid item xs>

                        <NavLink to="/cma/register">
                           <Link
                              to="login"
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
            </Grid>

         </Grid>
      </React.Fragment>
   );
}
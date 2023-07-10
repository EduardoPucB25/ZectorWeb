import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';

import { Button } from 'primereact/button';
import LogoZector from '../../../assets/images/LogoZector.png'
import { Typography } from '@mui/material';



export default function HeaderLYR() {

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
      <React.Fragment>
         <Grid container sx={{ display: 'flex', alignItems: 'center', minHeight: 85, maxHeight: 85, width: '100%', backgroundColor: '#1f3c59', }}>
            <Grid item xs={12} sm container>
               <Grid item xs container direction="row" marginTop={-2}>
                  <Grid item xs={2}>
                     <img alt="logo" src={LogoZector} height="120" className="p-mr-2"></img>
                  </Grid>
                  <Grid item xs={7} container spacing={1}>
                  </Grid>

                  <Grid item xs={3} container direction="row" marginTop={2} spacing={3}>
                     <Grid item>
                     <Box
                           sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                        >
                           <Link
                              href="login"
                              underline="none"
                              variant="solid"
                              color="neutral"
                              level='h6'
                              sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                           >
                              Ingresar
                           </Link>
                        </Box>

                     </Grid>
                     <Grid item>
                        <Box
                           sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                        >
                           <Link
                              href="register"
                              underline="none"
                              variant="solid"
                              color="primary"
                              level='h6'
                              sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1 }}
                           >
                              Registrarse
                           </Link>
                        </Box>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </React.Fragment>
   );
}
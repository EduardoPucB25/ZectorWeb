import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}));

export default function cardDr(){

   return (
      <>
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
      </>
   )
}



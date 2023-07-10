import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


export const Modules = () => {
   return (
      <div>         <Accordion >
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
         >
            {/* BLOQUE DEL TITULO */}
            <ListItemIcon >

            </ListItemIcon>
            <Typography>
               Aqui va el Módulo
            </Typography>

         </AccordionSummary>

         {/* CONTENIDO DEL MODULO */}
         <AccordionDetails>
            <ListItem disablePadding >
               <ListItemButton>
                  <ListItemIcon >
                     Categoria
                  </ListItemIcon>
                  <ListItemText />
               </ListItemButton>
            </ListItem>
         </AccordionDetails>
      </Accordion>


         <Accordion >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               {/* BLOQUE DEL TITULO */}
               <ListItemIcon >

               </ListItemIcon>
               <Typography>
                  Personal
               </Typography>

            </AccordionSummary>

            {/* CONTENIDO DEL MODULO */}
            <AccordionDetails>
               <ListItem disablePadding >
                  <ListItemButton>
                     <ListItemIcon >
                        Categoria
                     </ListItemIcon>
                     <ListItemText />
                  </ListItemButton>
               </ListItem>
            </AccordionDetails>
         </Accordion></div>
   )
}

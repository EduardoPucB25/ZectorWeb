
import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modules } from './Modules';
import { PanelMenuAdmin } from './PanelMenu';
import { MaximizeOutlined } from '@mui/icons-material';



export default function SideBar() {
  return (
    <div>
      <Box sx={{ maxWidth: 200, minWidth: 200,  textAlign: 'center', alignItems: 'center', padding: '10%', border: '1px '}}>
         {/* <Box sx={{margin: (drawerWidth * .07), height: (drawerWidth * .5), width: (drawerWidth *.5)}}> */}
            {/* IMAGEN HOSPITAL */}
            <Avatar sx={{ marginLeft: '45%'}}></Avatar> 
            {/* NOMBRE HOSPITAL */}
            <Typography paragraph         sx={{
              minWidth: '100%',
              maxWidth: '100%',
              }}>
              Centro Medico de las Américas
            </Typography>     
            <Typography paragraph>
              C.M.A.
            </Typography>            
                     
         {/* </Box> */}
            {/* sx={{paddingBlock: 3}} */}
      </Box>

      <Box >
         <PanelMenuAdmin/>
         {/* <Modules/> */}
      </Box>
    </div>
  )
}




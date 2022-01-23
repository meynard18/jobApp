import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { Divider } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

function DrawerComponent() {
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="right"
         >
            <List>
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/">Home</Link>
                  </ListItemText>
               </ListItem>
               <Divider />
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/jobs">Jobs</Link>
                  </ListItemText>
               </ListItem>
               <Divider />
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/about">About Us</Link>
                  </ListItemText>
               </ListItem>
               <Divider />
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/contact">Contact Us</Link>
                  </ListItemText>
               </ListItem>
               <Divider />
            </List>
         </Drawer>
         <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DehazeIcon sx={{fontSize:25}} />
         </IconButton>
      </>
   );
}

export default DrawerComponent;

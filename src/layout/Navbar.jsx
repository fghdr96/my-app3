
import { Home, Inbox, Mail, ModeNight, Person } from '@mui/icons-material';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'


export default function Navbar({mode , setMode}) {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{justifyContent:'center'}} >
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
          <Link   to='/'  style={{textDecoration:'none', color:"#7C7C7C"}}>
          Home
        </Link>
         </ListItemButton>
              
        <ListItemButton>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <Link to='/users' style={{textDecoration:'none',color:"#7C7C7C"}} >
        Users
        </Link>  
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
          <ModeNight />
        </ListItemIcon>
        <Switch  onChange={e => setMode(mode === "light" ? "dark" : "light")} />
        </ListItemButton>
        
        
       
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox/> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>

<Button onClick={toggleDrawer(true)} sx={{color:"#C774BB",justifyContent:'center',alignItems:'center',pl:2,pt:3,fontFamily: "Playwrite AU TAS"}}>Open Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

    
  </> 
    
  )
}

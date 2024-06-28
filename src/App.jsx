import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/home'
import Navbar from './layout/Navbar'
import UsersList from './pages/users'
import UserDetails from './pages/users/user'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'




export default function App() {
  const [mode , setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
      primary: {
        main: '#fff',
      },
    },
    
    
   
  

  });
  

  return (
   

    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
 <ThemeProvider theme={darkTheme}>
<CssBaseline />
    <Box sx={{display:'flex'}} bgcolor={"background.default"} color={"text.primary"}>
      <Box sx={{flex:'10% 1 0'}}>
        <Navbar setMode={setMode} mode={mode} />
      </Box>
       
   
     <Box style={{flex:'90% 1 1'}}>

     
      <Routes>      
      
        <Route path='/' element={<Home />} />      
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:userId' element={<UserDetails />} />       
      

      </Routes>
      </Box>
 </Box>
        </ThemeProvider>
    </BrowserRouter>
  
  )
}

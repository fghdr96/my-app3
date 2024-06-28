import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"

export default function UserDetails() {
   const {userId} = useParams();
   
   const [user, setUser] = useState([]);
   
   useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/" +userId)
    .then((res) => {
       setUser(res.data)
    });
    
  
   }, [userId]);
   
  
   
  return (
    <Box sx={{border:'1px solid #C774BB', margin:'10px', justifyContent:'center' , alignItems:'center'}} >  
        <Typography variant="h4" sx={{padding:'10px', textAlign:'center',fontFamily: "Playwrite AU TAS"}}>Details of a user #{userId}</Typography>
        <Box sx={{display:'flex' ,flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
        <Box sx={{padding:'10px'}}> <img src={user.image} alt={user.name} /></Box>
        <Box sx={{padding:'10px'}}>Name: {user.name}</Box>
        <Box sx={{padding:'10px'}}>Gender: {user.gender}</Box>
        <Box sx={{padding:'10px'}}>Status: {user.status}</Box>
        <Box sx={{padding:'10px'}}>Species: {user.species}</Box>
        </Box>

        

        </Box>
  )
}

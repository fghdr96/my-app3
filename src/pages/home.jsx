import { Box, Card, IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pic1 from "../Assets/pic1.jpg"
import { Search } from "@mui/icons-material";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${searchText}` )
    .then((res =>{
      setCharacters(res.data.results);
    }))

  }, [searchText])
  
  const userView = (users) => {
    return(
      characters.map(user => <Card  key={user.id}   sx={{display:'inline-flex',flexDirection:'column',width:'200px',p:'8px',justifyContent:'center',alignItems:'center'}}>
        <img src={user.image} alt={user.name} width={'150px'} />
     <Link to={'/users/' +user.id} style={{textDecoration:'none', color:'#8C827F'}} >{user.name}</Link> 
    
   </Card>)
    )
  }



 

  return (

  <>
  <Box>
 <Box>
   <img src={Pic1} alt="Rick and Morthy" width="100%" height="70%" />
 </Box>
  
  <Box display='flex' justifyContent="center" alignItems="center" mt={2} mb={5}>
    <TextField   placeholder="search..." variant="outlined" value={searchText} onChange={(e)=> setSearchText(e.target.value)}  
    InputProps={{startAdornment: (
      <InputAdornment position="end" sx={{pr:2}} >
        <Search />
      </InputAdornment>)}}
      />
      
  
    
    <IconButton></IconButton>
  </Box>

    <Box sx={{display:'grid',gap:'15px',justifyItems:'center',gridTemplateColumns:{xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)' , lg:'repeat(4,1fr)'}}}>
  
   {userView()}
    </Box>
    
    </Box>
   </>
  )
}

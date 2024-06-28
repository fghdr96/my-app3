import axios from "axios";
import { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import  './style.css';
import { Box, Card, Typography } from "@mui/material";
import Pic2 from "./pic2.jpg"
export default function UsersList() {
    const [users, setUsers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleClick = (e) => {
    setCurrentPage(e.target.value)
  }

  const pages = [];
  for(let i=1 ; i<=Math.ceil(users.length/itemsPerPage); i++){
    pages.push(i);
  }
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItems,indexOfLastItems);
  const renderPageNumbers = pages.map((number) =>{
    return(
      <li key={number} value={number} 
      onClick={handleClick}
       className={currentPage === number ? "active" : null}>
        {number}
        </li>
    )
  });  


    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character")
      .then((res =>{
        setUsers(res.data.results);
      }))
  
    }, [])
    
    const userView = (users) => {
      return(
        users.map(user => <Card  key={user.id}   sx={{display:'inline-flex',flexDirection:'column',p:'10px',justifyContent:'space-between',alignItems:'center'}}>
      <img src={user.image} alt={user.name} width={'150px'} />
       <Link to={'/users/' +user.id} style={{textDecoration:'none', color:'#8C827F'}} >{user.name}</Link> 
      
     </Card>)
      )
    }
    
  return (
    <>
    
   
    <Box sx={{border:'1px solid #C774BB',p:'10px',m:2, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Box>
   <img src={Pic2} alt="Rick and Morthy" width="100%" height="70%" />
   <Typography variant="h5" sx={{textAlign:'center' ,fontFamily: "Playwrite AU TAS", pt:3, pb:3}}>List of Charaacters</Typography>
 </Box>

     <Box>
     
      <Box sx={{display:'grid',gap:'15px',justifyItems:'center',gridTemplateColumns:{xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)' , lg:'repeat(5,1fr)'}}}>
          {userView(currentItems)}
      </Box>

    <Box  mt={5}  sx={{justifyContent:'center',alignItems:'center'}}>
      <ul className="pageNumbers">{renderPageNumbers}</ul>
    </Box>
       
     
      
    </Box>
    </Box> 
    </>
  )
}

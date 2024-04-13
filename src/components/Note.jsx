import React from "react";
import "../../public/styles.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {


  return(
    <>
        
          <div className="note">
        
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="delete_button" onClick={() => {
            props.delete(props.id)
          }}> <DeleteIcon /> </button> 
          
        </div>
         
     
      
      
    

   
    
   

    </>
 
  )


       
       
        
     
      
  
  
}

export default Note;

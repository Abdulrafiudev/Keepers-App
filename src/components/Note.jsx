import React from "react";
import "../../public/styles.css"

function Note(props) {


  return(
    <>

   

      
        
          <div className="note">
        
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="delete_button" onClick={() => {
            props.delete(props.id)
          }}> Delete</button> 
          
        </div>
         
     
      
      
    

   
    
   

    </>
 
  )


       
       
        
     
      
  
  
}

export default Note;

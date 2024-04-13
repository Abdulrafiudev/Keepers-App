import React from "react";
import "../../public/styles.css"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import { useState } from "react";


function CreateArea(props) {

  let [display_full_area, set_display_full_area] = useState(false)

  function handle_click (){
    set_display_full_area(true)
  }
  return (
    <div>
      <form onSubmit={props.click} className="form_area">
        {display_full_area && <input name="title" placeholder="Title" onChange={props.change} value={props.content.title}/> }
        
        <textarea name="content" placeholder="Take a note..." rows={display_full_area ? "3" : "1"} onChange={props.change} value={props.content.content} onClick={handle_click}/>
        <Zoom in = {display_full_area}>
           <Fab> <AddIcon />  </Fab> 
        </Zoom>
         
      </form>
    </div>
  );
}

export default CreateArea;

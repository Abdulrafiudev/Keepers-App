import React from "react";
import "../../public/styles.css"

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.click}>
        <input name="title" placeholder="Title" onChange={props.change} value={props.content.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.change} value={props.content.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

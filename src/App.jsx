import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "../public/styles.css"

function App() {

  let [keepers_content, set_keeper_content] = useState(
    {
      title : "",
      content : ""
    }
  )
  let [notes, set_notes] = useState([])
  
  // This function handles the input fields and get the element
  function handle_change(event){

    let {name, value} = event.target

    set_keeper_content((prev_content) => {
      return({
        ...prev_content,
        [name] : value
      })
    })

  }

  // This function handles the form submission
  function handle_click(event){
    event.preventDefault()
    set_notes((prev_note) => {
      return(
        [
          ...prev_note,
          keepers_content
        ]
      )
    })
    set_keeper_content({
      title : "",
      content : ""
    })
  }

  //This function will delete a note content when the delete button is clicked

 function delete_button(id){
  console.log(notes)
  console.log(id)

  set_notes((prev_notes) => {
    return (
      prev_notes.filter((note, index) => {
        
        return ( index !== id)
      })
    )
  })
 }



  return (
    <div>
      <Header />
      <CreateArea content = {keepers_content} change = {handle_change} click = {handle_click} notes = {notes}/>
      <div className="grid">
        {notes.map((note, index) => {
          return(
            <Note key={index} id = {index} title={note.title} content={note.content} delete = {delete_button} notes = {notes}/>
          )
        })}
      </div>
    
      
      <Footer />
    </div>
  );
}

export default App;

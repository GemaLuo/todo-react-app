import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { db } from '../../utils/firebase'

export default function TodoListItem({ todo, inprogress, id}) {
  
  function toggleInProgress(){
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    })
  }
  
  function deleteTodo(){
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText 
          primary={todo} 
          secondary={inprogress ? "In Progress" : "Completed"} 
        />
      </ListItem>
        

      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "Undone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  )
}

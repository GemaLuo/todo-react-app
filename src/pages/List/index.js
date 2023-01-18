//useState:回傳當前的值
import React, { useState, useEffect } from "react";
import { db } from '../../utils/firebase';
import { Link } from "react-router-dom";
import "../../styles/Todo.scss";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import TodoListItem from "./Todo";
import "firebase/compat/firestore";

function List() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput]=useState("");
  
  useEffect(() => {
    getTodos();
  }, []) //blank to run only on first launch
  
  function getTodos(){
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }))
      );
    })
  }

  function addTodo(e){
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div 
      className="list"> 
      <div
        style={{ 
          display: "flex", 
          flexDirection:"column", 
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "40px",
        }} 
      >
        <h1>Todo-list</h1>
        <form>
          <TextField 
            id="standard-basic"
            label="Write a todo"
            value={todoInput}
            margin="dense"
            size="medium"
            variant="filled"
            style={{width: "90vw", maxWidth: "500px"}} 
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            onClick={addTodo}
            style={{height: "50px", textAlign:"center", fontSize: "25px", justifyContent: "center", marginTop: "11px"}}
          >
            Add
          </Button>
        </form>
        
        <div style={{width: "90vw", maxWidth: "500px", marginTop: "15px", color: "white" }}>
          {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo} 
            inprogress={todo.inprogress} 
            id={todo.id} 
          />
        ))}
        </div>
        <Link to="/" className="btn">home</Link>
      </div>
    </div>
  )
}

export default List;
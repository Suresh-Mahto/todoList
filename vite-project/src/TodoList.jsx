import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let [todos, setTodos]=useState([{ task:"sample task",id:uuidv4()}])
let[newTodo,setNewTodo]=useState("");

let addNewTask = () => {
   setTodos((prevTodos) =>{
    return[...prevTodos,{task: newTodo, id:uuidv4()}];
   });
   setNewTodo("");
}
let updateTodoValue=(event) =>{
    setNewTodo(event.target.value);
}
let deleteTodo=(id)=>{
   setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

}

    return(
        <div>
           <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
           <br></br>
           <button onClick={addNewTask}>Add Task</button>
           <br></br>
           <br></br>
           <br></br>

            <hr></hr>
           <h4> Task Todo  </h4>
           <ul>
            {
                todos.map((todos)=>(
                    <li key={todos.id}>
                    <span>    {todos.task}</span>
                    &nbsp;&nbsp;&nbsp; 
                    <button onClick={() =>deleteTodo(todos.id)}>delete</button>
                    </li>
                )
            )
            }
           </ul>
        </div>
    )
}
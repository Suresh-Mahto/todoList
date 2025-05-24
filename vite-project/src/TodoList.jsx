import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let [todos, setTodos]=useState([{ task:"sample task",id:uuidv4(),isDone:false}])
let[newTodo,setNewTodo]=useState("");

let addNewTask = () => {
   setTodos((prevTodos) =>{
    return[...prevTodos,{task: newTodo, id:uuidv4(),isDone:false}];
   });
   setNewTodo("");
}
let updateTodoValue=(event) =>{
    setNewTodo(event.target.value);
}
let deleteTodo=(id)=>{
   setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

}
    let upperCaseAll=() => {
     setTodos((prevTodos)=>(
        prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }
        })
    ));

};
let markAllDone=() => {
     setTodos((prevTodos)=>(
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            }
        })
    ));

};
let upperCaseOne =(id) =>{
    setTodos((prevTodos)=>(
        prevTodos.map((todo)=>{
            if(todo.id == id){
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }}
            else {
                return todo;
            }
        })
    ));

}
let markAsDone =(id) =>{
    setTodos((prevTodos)=>(
        prevTodos.map((todo)=>{
            if(todo.id == id){
            return{
                ...todo,
                isDone:true,
            }}
            else {
                return todo;
            }
        })
    ));

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
                    <span 
                        style={todos.isDone ?{ textDecoration:"Line-through"}:{}}
                    >    {todos.task}</span>
                    &nbsp;&nbsp;&nbsp; 
                    <button onClick={() =>deleteTodo(todos.id)}>delete</button>
                    <button onClick={() =>upperCaseOne(todos.id)}>upperCaseOne</button>
                    <button onClick={() =>markAsDone(todos.id)}>markAsDone</button>
                    </li>
                )
            )
            }
           </ul>
           <br></br>
           <button onClick={upperCaseAll}>upperCaseAll</button>
             <br></br>
           <br></br>
           <br></br>
           <button onClick={markAllDone}>Mark as all done</button>
        </div>
    )
}
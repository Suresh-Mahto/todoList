import {useState} from "react";

export default function TodoList() {
let [todos, setTodos]=useState(["sample task"])
let[newTodo,setNewTodo]=useState("");

let addNewTask = () => {
   setTodos([...todos,newTodo]);
   setNewTodo("");
}
let updateTodoValue=(event) =>{
    setNewTodo(event.target.value)
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
                    <li>{todos}</li>
                )
            )
            }
           </ul>
        </div>
    )
}
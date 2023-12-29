import { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
    // let todos = [
    //     {id: 1, data: 'Todo 1'},
    //     {id: 2, data: 'Todo 2'},
    //     {id: 3, data: 'Todo 3'},
    // ];

    const [todos, setTodos] = useState([]);
    const [newTodo, setTodo] = useState("");

    return (
        <div>
            <input type="text" placeholder="new todos..." 
                onChange={(event) => setTodo(event.target.value)} 
            /> <br />

            <button onClick={() => setTodos([...todos, newTodo])}>Add Todo</button>
            <TodoList todos={todos} />
        </div>
    );
}

export default Todo;
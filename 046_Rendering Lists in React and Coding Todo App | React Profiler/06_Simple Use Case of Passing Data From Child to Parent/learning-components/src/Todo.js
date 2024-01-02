import TodoItem from "./TodoItem";
import { useState } from "react";

function Todo(props) {
    // const todoItems = props.todoList.map((todo) => <TodoItem todo={todo} />);
    const [todoItems, setTodoItems] = useState([]);

    return (
        <>
            {/* <ul> {todoItems} </ul> */}
            <ul> {todoItems.map((todo) => <TodoItem todo={todo} key={todo.id} />)}</ul>
        </>
        
    );
}

export default Todo;

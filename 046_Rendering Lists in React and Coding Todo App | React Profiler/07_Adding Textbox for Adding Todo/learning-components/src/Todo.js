import TodoItem from "./TodoItem";
import { useState } from "react";

function Todo(props) {
    // const todoItems = props.todoList.map((todo) => <TodoItem todo={todo} />);
    const [todoItems, setTodoItems] = useState([{data: 'Todo1', id: 123}, {data: 'Todo2', id: 213}]);
    const [inputText, setInputText] = useState("");


    return (
        <>
            {/* <ul> {todoItems} </ul> */}

            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
            />
            <button 
                onClick={() => setTodoItems([...todoItems, {data: inputText, id: (new Date()).getTime()}])}
            >add Todo</button>
            
            <ul> 
                {todoItems.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
            </ul>
        </>
        
    );
}

export default Todo;

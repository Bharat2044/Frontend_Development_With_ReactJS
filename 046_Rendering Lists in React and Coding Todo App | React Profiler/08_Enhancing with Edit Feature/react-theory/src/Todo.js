import TodoItem from "./TodoItem";
import { useState } from "react";

function Todo(props) {
    // const todoItems = props.todoList.map((todo) => <TodoItem todo={todo} />);
    const [todoItems, setTodoItems] = useState([{data: 'Todo1', id: 123}, {data: 'Todo2', id: 213}]);
    const [inputText, setInputText] = useState("");

    function deleteTodo(id) {
        // console.log(id);
        let remainingTodo = todoItems.filter((todo) => todo.id != id);
        setTodoItems(remainingTodo);
    }

    function editTodo(id, newTodo) {
        let updateTodos = todoItems.map((todo) => {
            if(todo.id == id)
                todo.data = newTodo;
            return todo;
        });

        setTodoItems(updateTodos);
    }

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
                {todoItems.map((todo) => <TodoItem 
                                            todo={todo} key={todo.id} 
                                            delete={() => deleteTodo(todo.id)}  
                                            edit={(newTodo) => editTodo(todo.id, newTodo)}
                                         />
                                )
                }
            </ul>
        </>
        
    );
}

export default Todo;

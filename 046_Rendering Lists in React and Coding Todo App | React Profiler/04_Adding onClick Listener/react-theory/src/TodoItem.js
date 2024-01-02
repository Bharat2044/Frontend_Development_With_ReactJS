function handleClick(todo) {
    console.log(todo.data);
    alert(`${todo.data} Clicked`);
}


function TodoItem(props) { 

    // different ways to call a function with parameters

    // return <li onClick={handleClick.bind(this, props.todo)}>{props.todo.data}</li>
    
    // return <li onClick={function() { 
    //     handleClick(props.todo);
    // }}>{props.todo.data}</li>

    // return <li onClick={() => handleClick(props.todo)}>{props.todo.data}</li>
    return <li onClick={() => {
        handleClick(props.todo);
    }}>{props.todo.data}</li>
}

export default TodoItem
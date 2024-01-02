function TodoItem(props) { 

    return <li>{props.todo.data}</li>
}

function Todo(props) {
    const todoItems = props.todoList.map((todo) => <TodoItem todo={todo} />);

    return (
        <ul> {todoItems} </ul>
    );
}

export default Todo;

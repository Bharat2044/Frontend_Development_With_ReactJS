function Todo(props) {
    const todoItems = props.todoList.map((todo, index) => <li key={index}>{todo}</li>)

    return (
        <div> 
            <ul> {todoItems} </ul>
        </div>
    );
}

export default Todo;

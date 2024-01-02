import TodoItem from "./TodoItem";

function Todo(props) {
    const todoItems = props.todoList.map((todo) => <TodoItem todo={todo} />);

    return (
        <ul> {todoItems} </ul>
    );
}

export default Todo;

import TodoItem from "./TodoItem";

function Todo(props) {
    const todoItems = props.todoList.map((todo, index) => <TodoItem key={todo.id} todo={todo} />);

    return (
        <ul> {todoItems} </ul>
    );
}

export default Todo;

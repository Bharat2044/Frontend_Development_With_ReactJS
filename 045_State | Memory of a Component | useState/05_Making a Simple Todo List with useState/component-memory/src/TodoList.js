function TodoList({todos}) {    // todos -> [{}, {}]
    
    // const todoItems = todos.map((todo) => <li>{todo.data}</li>) // todo -> {id: 1, data: 'some todo'}
    // return <ul>{todoItems}</ul>;

    // return <ul>{todos.map((todo) => <li>{todo.data}</li>)}</ul>; // todo -> {id: 1, data: 'some todo'}
    
    console.log(todos);
    return <ul>{todos.map((todo, index) => <li key={index}>{todo}</li>)}</ul>; // todo -> {id: 1, data: 'some todo'}
    
}

export default TodoList;
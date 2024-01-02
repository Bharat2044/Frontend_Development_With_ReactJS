function Todo(props) {
    const todoItems = props.todoList.map((ele) => <li>{ele}</li>)

    return (
        <div> 
            <ul> {todoItems} </ul>
        </div>
    );
}

export default Todo;



// function Todo(props) {
//     return (
//         <div>
//             <ul> {props.todoList} </ul>
//         </div>
//     );
// }

// export default Todo;
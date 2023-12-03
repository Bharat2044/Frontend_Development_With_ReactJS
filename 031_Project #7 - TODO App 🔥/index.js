console.log("Welcome to my todo app");

let todoDataSection = document.getElementById("todo-data");
function addTodo(todoData) {
    console.log("Called Add Todo")
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    // adding classess
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-actions", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger");
    finishedButton.classList.add("btn", "btn-success");

    todoNumber.textContent = "1"; 
    todoDetail.textContent = todoData;  // sets the todo text sent from the input element
    todoStatus.textContent = "In progress"; 
    deleteButton.textContent = "Delete"; 
    finishedButton.textContent = "Finished"; 

    // creating the div on dom
    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataSection.appendChild(rowDiv)
}

















/*
let getTodosButton = document.getElementById("get-todos");

// registration of event listener
getTodosButton.addEventListener("click", () => {
    console.log("Clicked");
});

getTodosButton.addEventListener("mouseover", handler);
function handler() {
    console.log("On Button");
}

getTodosButton.addEventListener("mouseout", () => {
    console.log("Out of Button");
});


getTodosButton.onclick = () => {
    console.log("Clicked");
}
*/
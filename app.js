//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
    //Prevent form from submiting
    event.preventDefault();
    // Create Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hello';
    newTodo.classList.add('todo-item');
    //AppendChild
    todoDiv.appendChild(newTodo);

    //CheckMark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<li class='fas fa-check'> </li>";
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //Trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<li class='fas fa-trash'> </li>";
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv)
}
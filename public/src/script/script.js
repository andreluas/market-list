const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li');
const clear = document.querySelector('.clearAll');

let listLength = list.length;

// GENERATE TODO
const generateTodo = (todo) => {
    const html = `<li>
                    <input type="checkbox" id="todo_${listLength}">
                    <label for="todo_${listLength}">
                    <span class="check"></span>
                    ${todo}
                    </label>
                    <i class="far fa-trash-alt delete"></i>
                </li>`
    todoList.innerHTML += html;
};

// ADD TODOS FUNCTION
function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim();

    if(todo.length) {
        listLength = listLength + 1;
        generateTodo(todo);
        submitForm.reset();
    }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

// REMOVE TODOS FUNCTION
function deleteTodos(e) {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}

todoList.addEventListener('click', deleteTodos);

// CLEAR ALL TODOS FUNCTION
function clearUp() {
    todoList.innerHTML="";
}

clear.addEventListener('click', clearUp);
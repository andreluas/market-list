const subimitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelector('.todos li');

let listLenght = list.lenght;

const generateTemplate = (todo) => {
    const html = `
        <li>
            <input type="checkbox" id="todo_${listLenght}">
            <label for="todo_${listLenght}">
                <span class="check"></span>
                ${todo}
            </label>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `

    todoList.innerHTML += html;
};


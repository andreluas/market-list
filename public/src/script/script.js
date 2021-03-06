// TODO 
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li');
const clear = document.querySelector('.clearAll');
const btnModal = document.getElementById('#modal');
const priceDiv = document.querySelector('.p-price')
// CALC
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let listLength = list.length;
var teste = "0.00"

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
    display1El.innerHTML = '0';
    display2El.innerHTML = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '0';
    priceDiv.innerText = '0.00';
}

clear.addEventListener('click', clearUp);

// ***************
// MODAL CALC
// ***************

// hide function
function modalOnOff() {
    btnModal
        .classList
        .toggle("hide")   
        
    todoList
        .classList
        .toggle("hide")
}

// CALC Variables
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
    // usage dot
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else  if(e.target.innerText === '.' && haveDot) {
            return;
        }
        // numbersEl for display
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});

// numbersEl for operations
operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        // !dis2Num and Dot
        if(!dis2Num) return;
        haveDot = false;
        
        const operationName = e.target.innerText;
        
        if(dis1Num && dis2Num && lastOperation) {
        mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }

        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

// clearVar function
function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}

// mathOp function
function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

// equal button
equalEl.addEventListener('click', (e) => {
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    priceDiv.innerText = result;
    dis2Num = result;
    dis1Num = '';
});


// C element - ClearAll
clearAllEl.addEventListener('click', (e) => {
    display1El.innerHTML = '0';
    display2El.innerHTML = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '0';
    priceDiv.innerText = '0.00';
});

// CE element - last clear
clearLastEl.addEventListener('click', (e) => { 
    display2El.innerText = '';
    dis2Num = '';
});

// number keypress event
window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' || 
        e.key === '1' || 
        e.key === '2' || 
        e.key === '3' || 
        e.key === '4' || 
        e.key === '5' || 
        e.key === '6' || 
        e.key === '7' || 
        e.key === '8' || 
        e.key === '9' || 
        e.key === '.'  
    ){
        clickButtonEl(e.key);
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' ||
        e.key === '/' 
    ){
        clickOperation(e.key);
    } else if(e.key === '*') { // * is different of X so make an else
        clickOperation('X')
    } else if(e.key == 'Enter' || e.key === "=") {
        clickEqual();
    }
});

// keypress number function
function clickButtonEl(key) {
    numbersEl.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

// keypress operation function
function clickOperation(key) {
    operationEl.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

// keypress equal function
function clickEqual() {
    equalEl.click();
}

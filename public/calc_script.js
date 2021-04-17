const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

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

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) return;
        haveDot = false;
        
        const operationName = e.target.innerText;
        
        if(dis1Num && dis2Num && lastOperation) {
        mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }

        clearVar(operationName);
        console.log(result);
    })
});
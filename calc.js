const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');

const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');

const btn10 = document.querySelector('.btn10');
const btn11 = document.querySelector('.btn11');
const btn12 = document.querySelector('.btn12');

const btn13 = document.querySelector('.btn13');
const btn14 = document.querySelector('.btn14');
const btn15 = document.querySelector('.btn15');

const calculate = document.querySelector('.calc');

const clear = document.querySelector('.clear');

const backSpace = document.querySelector('.backSpace');

const header = document.querySelector('.header');

btn1.addEventListener("click", ()=>{
    header.innerHTML += btn1.innerHTML;
});

btn2.addEventListener("click", ()=>{
    header.innerHTML += btn2.innerHTML;
});

btn3.addEventListener("click", ()=>{
    header.innerHTML += btn3.innerHTML;
});

btn4.addEventListener("click", ()=>{
    header.innerHTML += btn4.innerHTML;
});

btn5.addEventListener("click", ()=>{
    header.innerHTML += btn5.innerHTML;
});

btn6.addEventListener("click", ()=>{
    header.innerHTML += btn6.innerHTML;
});

btn7.addEventListener("click", ()=>{
    header.innerHTML += btn7.innerHTML;
});

btn8.addEventListener("click", ()=>{
    header.innerHTML += btn8.innerHTML;
});

btn9.addEventListener("click", ()=>{
    header.innerHTML += btn9.innerHTML;
});

btn10.addEventListener("click", ()=>{
    header.innerHTML += btn10.innerHTML;
});

btn11.addEventListener("click", ()=>{
    header.innerHTML += btn11.innerHTML;
});

btn12.addEventListener("click", ()=>{
    header.innerHTML += btn12.innerHTML;
});

btn13.addEventListener("click", ()=>{
    header.innerHTML += btn13.innerHTML;
});

btn14.addEventListener("click", ()=>{
    header.innerHTML += btn14.innerHTML;
});

btn15.addEventListener("click", ()=>{
    header.innerHTML += btn15.innerHTML;
});

calculate.addEventListener("click", ()=>{
    header.innerHTML = eval(header.innerHTML);
});

clear.addEventListener("click", ()=>{
    header.innerHTML = '';
});


backSpace.addEventListener("click", ()=>{
    let val = header.innerHTML;
    val = val.substring(0, val.length-1);
    header.innerHTML = val;
});
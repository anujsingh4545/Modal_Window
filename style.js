"use strict";


let Modal = document.querySelectorAll('.modal');
let Display = document.querySelector('.display');
let Close = document.querySelector('.closeModal');
let Blur = document.querySelector('.blur');
// console.log(Blur);

for(let i=0;i<Modal.length;i++){
    Modal[i].addEventListener('click', function(){
        Display.classList.remove('hidden');
        Blur.classList.remove('hidden');
    })
}

function closetab(){
    Display.classList.add('hidden');
    Blur.classList.add('hidden');
}

Close.addEventListener('click',closetab);

Blur.addEventListener('click',closetab);


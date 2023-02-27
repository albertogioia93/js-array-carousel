'use strict';

// devo ricreare questi div qui su js togliendoli da index 
/* <div class="item show"><img src="img/01.webp" alt=""></div>
<div class="item"><img src="img/02.webp" alt=""></div>
<div class="item"><img src="img/03.webp" alt=""></div>
<div class="item"><img src="img/04.webp" alt=""></div>
<div class="item"><img src="img/05.webp" alt=""></div>  */

// CREAZIONE ELEMENTI HTML

const immagini = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
let attivo = 0;

let itemsContent = '';


for(let i = 0; i < immagini.length; i++){
    // console.log(immagini[i]);
    itemsContent += `<div class="item"><img src="img/${immagini[i]}" alt=""></div>`;
}

slider.innerHTML += itemsContent;
// si può fare anche così: slider.innerHTML = slider.innerHTML + itemsContent;

document.querySelector('.item').classList.add('show');

// FINE CREAZIONE ELEMENTI HTML


// INTERATTIVITà TRA GLI ELEMENTI

const up = document.querySelector('.up');
const down = document.querySelector('.down');
const items = document.querySelectorAll('.item');

up.addEventListener('click', function (){
    if(attivo > 0){
        items[attivo].classList.remove('show');
        attivo--;
        items[attivo].classList.add('show');
    }
})

down.addEventListener('click', function (){ 
    if(attivo < items.length - 1){
        items[attivo].classList.remove('show');
        attivo++;
        items[attivo].classList.add('show');
    }
})
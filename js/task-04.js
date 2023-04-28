let counterVal = 0;
const displayCounter = document.querySelector('#value');
const buttonMin = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
buttonMin.addEventListener('click',() =>{
    counterVal--;
    displayCounter.textContent = counterVal;
})
buttonPlus.addEventListener('click', ()=> {
    counterVal++;
    displayCounter.textContent = counterVal;
})
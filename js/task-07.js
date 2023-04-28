const inputChange = document.querySelector('input#font-size-control');
const ourText = document.querySelector('span#text');

inputChange.addEventListener('change', event => {
    ourText.style.fontSize = `${event.target.value }px`
})
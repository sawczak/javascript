let footer = document.createElement('footer'); //w pamieci js tworzy sie nowy znacznik footer
let footerText = document.createTextNode('stopka strony'); //stopka strony - to jest node

footer.appendChild(footerText); //tworzymy <footer>Stopka strony </footer>

footer.setAttribute('class', 'custom-footer'); //tworzymy i nadajemy klasę stopce

document.querySelector('section').insertAdjacentElement('afterend', footer); //wklejamy nowy element (stopkę) do pliku HTML


let parSecond = document.querySelector('.parSecond');
document.body.firstElementChild.removeChild(parSecond); //usuwanie elementów, w tym przypadku klasę parSecond / removechild usuwa konkretny element, a nie tablice

// let parFirst = document.querySelector('parFirst');
// document.body.parentElement.removeAttribute('parFirst'); jak usunąć inny element?


console.log(footer);
let emelent;

element = document.getElementById('main-header').parentElement; //dostęp do całego header, dostajemy się do rodzica
element = document.getElementById('main-header').parentElement.childNodes; //dostęp do rodzica i pobieramy wszystkie jego elementy, text = rozbicie na wiersze, przejście do kolejnej linii
element = document.getElementById('main-header').parentElement.children; //pobieramy dzieci bez text, tylko elementy html

element = document.querySelector('header').firstElementChild; //odwołanie do pierwszego dziecka
element = document.querySelector('header').lastElementChild; //odwołanie do ostatniego dziecka





// element = document.querySelector('header').firstElementChild; //odwołanie do pierwszego dziecka
// element = document.querySelector('header').lastElementChild; //odwołanie do ostatniego dziecka


console.log(element);
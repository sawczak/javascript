let header = document.querySelector('header');
// header.innerHTML = 'Nowy kontent w header'; // zamaist struktury html consola pokaże nam podany tekst
// header.innerHTML = '<a href="a">Nowy link w header</a>'; //tworzymy link zamiast tekstu


// console.log(header.innerHTML); //inner pokazuje co mieści się w header, jesli nie podamy 2 wiersza

header.lastElementChild.textContent = 'Span!!'; // zmieniamy text w spanie na nowy

console.log(header.lastElementChild.textContent); // text content pobiera nam text z danego elementu, teraz ze span


console.log(header.innerHTML); //brak struktury dla struktury header, a w outer jest
console.log(document.querySelector('.parSecond').outerHTML); //dostajemy strukture dzieci i calej klasy



let link = document.querySelector('.link.superlink'); //dostajemy tablicę wszystkich klas
link.classList.add('nowa-klasa'); // dodaje klasę
link.classList.remove('nowa-klasa'); //usuwa klase
link.classList.toggle('nowa-klasa');

console.log(link.classList);

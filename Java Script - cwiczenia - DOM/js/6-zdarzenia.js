//w kodzien HTML zmiana koloru w header po kliknięciu
let header = document.querySelector('header');

colorChange = () => {
    header.style.color = 'red';
    // console.log('click z <header></header>');
}




//HTML DOM zmiana koloru tła w wybranej klasie po kliknięciu
let parSecond = document.querySelector('.parSecond');

ondblClick = () => {
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = ondblClick;



//addEventListener po najechaniu myszką pojawia się kolor tła

let parFirst = document.querySelector('#parFirst');

najechanieMyszka = () => {
    // parFirst.style.backgroundColor = 'blue';
    parFirst.classList.toggle('toggle');
}

parFirst.addEventListener('click', najechanieMyszka);

// parFirst.addEventListener('mouseover', najechanieMyszka);

//usuwanie powyższej funkcji z najechaniem i kolorem
// parFirst.removeEventListener('mouseover', najechanieMyszka); tylko zniknię i sie nie pojawi



// zablokowanie domyslnego działania np. zablokownaie przekierowania, nie działa nam Link1
let link = document.querySelector('a[href="http://akademia108.pl"]');

link.onclick = () => {
    event.preventDefault(); //event to zbiór inf ktore przegladarka wysyła
    console.log(event.target); // target pokazuje co jest linkiem w konsoli
}

// console.log(link);


//po kliknięciu w h1 w konsoli pojawi się informacja, musimy mieć też
// wpisane w ccolorChange console.log('click z <header></header>');

let h1 = document.querySelector('#main-header');

h1.onclick = event => {
    event.stopPropagation();
    console.log('click z <h1></h1>');
}
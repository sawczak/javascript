//  trim - ścina spacje w formularzu 
/* 
zmienne - imie + mail
po kliknieicu we wszystkie zgody automatycznie 
onchange - klik na checkbox
ja na checkbox spr checkboxa - artybut 
funkcja true/ false boolean event onchange na ostatni checkbox discheck-opcja  zwróci nam czy jest zaznaczony czy nie w console.log*/

let form = document.querySelector('form');
let imieNazwisko = document.getElementById('name');
let adresEmail = document.querySelector('#email');
let zgoda1 = document.querySelector('#zgoda-marketingowa-1');
let zgoda2 = document.querySelector('#zgoda-marketingowa-2');
let wszystkieZgody = document.querySelector('#wszystkie-zgody');
let wiadomosc = document.querySelector('#wiadomosc');

// console.log(form, imieNazwisko, adresEmail, zgoda1, zgoda2, wszystkieZgody);



//walidacja formularza
function checkBoxes() {
    zgoda1.checked = this.checked; //atrybut do sprawdzenia dla input type checkbox
    // console.log(zgoda1.checked);
    zgoda2.checked = this.checked;

    zgoda1.disabled = this.checked;
    zgoda2.disabled = this.checked;
    // console.log(this.checked);
}

wszystkieZgody.onchange = checkBoxes; // po kliknięciu w ostatnia zgode, wykona się funkcja, cyzli zgoda 1 i 2 beda zaznaczone wyszarzone

//standard ES6
walidujFormularz = event => { 
//    event.preventDefault(); //zablokowanie wysyłania/ przeładowywania formularza - wywoływanie funkcji to ()
//    console.log('działa'); //jeśli bedzie ok w consoli pokaże się słowo działa

    wiadomosc.innerHTML = ''; //czyści nam pola

    if (imieNazwisko.value.trim() === '') { //trim - usuwamy spacje //=== 0 jesli nasz string jest pusty
        event.preventDefault();
        // console.log('pole name puste'); //zatrzymało m iformularz i przypisz pole name jest puste

        let alert = document.createElement('li');
        alert.innerText = 'Podaj imię!';
        wiadomosc.appendChild(alert);
        }


    if (adresEmail.value.trim() === '') { 
        event.preventDefault();

        let alert = document.createElement('li');
        alert.innerText = 'Podaj email!';
        wiadomosc.appendChild(alert);
        }

        if (!zgoda1.checked) { // ! - zparzeczenie
        // if (zgoda1.checked !== '') { // można tez zapisać tak
            event.preventDefault();
    
            let alert = document.createElement('li');
            alert.innerText = 'Zaznacz pierwszą zgodę!';
            wiadomosc.appendChild(alert);
            }
    
}

form.onsubmit = walidujFormularz;

//zapis ES5
/* 
function walidujFormularz(event) { 
    event.preventDefault(); 
}
 form.onsubmit = walidujFormularz;
 */

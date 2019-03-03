let form = document.querySelector('form');

/* form.onsubmit = event => {   //tutaj tylko mamy zablokowane wysyłanie
    event.preventDefault();
    console.log('stop');
} */

form.onsubmit = event => { //pobieranie zmiennych do konsoli
    event.preventDefault();

    let fname = document.querySelector('input[name="fname"]'); //trzeba stworzyć zmienna i odwołac się do selektora
    let lname = document.querySelector('input[name="lname"]');
    
    console.log(fname.value, lname.value); //value, bo chcemy aby zwróciło tylko jej wartość a nie całego inputa
}
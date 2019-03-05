let uzytkownicy = [
    {
        imie: 'Kaja',
        nazwisko: 'Nowak'
    }, {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    }, {
        imie: 'Mariusz',
        nazwisko: 'Witowski'
    }
];
// console.log(uzytkownicy[0].imie, uzytkownicy[1].imie, uzytkownicy[2].imie);


/* pętla for */

for (let index = 0; index < uzytkownicy.length; index++) { 
    console.log(uzytkownicy[index].imie); 
}

//start: od którego elementu zaczynamy, 0 - od poczatku, od pierwszego
//koniec: < do kiedy ma trwac pętla, do którego elementu
// po każdym elemencie powiększaj index o 1 - index++
// operujemy liczbami i tablicami 



/* pętla while */

/* let numer = 10;

while (numer >= 0) {
    console.log(numer);
    numer--;
}  */
//uzywamy tej pętli głównie do liczb, gdy coś chcemy zrobić 10 razy
// do przerwania pętli np. po 10 elementach wpisujemy break, bo to pętla i return nie zadziała


/* pętla forEach */

uzytkownicy.forEach((element, index) => {
    // console.log(element, index);
/*     if (index === 2) { */ // kolor oczu pokaże się tylko elementowi 3
    element.kolorOczu = 'niebieski'; //dodanie wszystkim jednego koloru oczu
    if (element.imie === 'Kaja' || element.imie === 'Natalia') {
        element.kolorOczu = 'niebieski';
    } else if (element.imie === 'Karol') {
        element.kolorOczu = 'piwny';
    } else if (element.imie === 'Mariusz') {
        element.kolorOczu = 'zielony';
    }
}/* } */
); //przypisujemy kolor oczu dla każdego inny
// tutaj w foreach mozemu użyc return bo w pętli jest funkcja, ale piszemy to nad pierwszym element.kolor...
console.log(uzytkownicy);


//pętla do while
let numer2 = 5;

do {
    console.log(numer2);
  }  while (numer2 -- > 3);
    

console.log(uzytkownicy);
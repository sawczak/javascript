// let typLiczba = 10 + 10;

// typLiczba = "10" + 10 + 20;

// typLiczba = `10 + 10 = ${10 + 10}`;

/* typLiczba = `10 + ` + `10 =` + (10 + 10); */



// typ boolean
/* 
typLiczba = 4 + 4 === 8;

console.log(typLiczba); */

// array 

/* let tablica = [typLiczba, 'Ola ma kota', true, 2 + 2];

console.log(tablica[1]);


let przykladowyObiekt = {id: 3, imie: 'Kacper'};

console.log(przykladowyObiekt.imie, przykladowyObiekt.id);

 */

// let tablica = [3, 'Ola ma kota', 10 + 10];
/* tablica[1] = 'Ola ma czarnego kota';
tablica[1] = {imie: 'Ola', ma: 'czarnego kot'} */

// tablica.reverse();
// tablica.unshift('Ooooooops'); /* dodajemy element na poczatku */
// tablica.shift('Ooooooops'); /* usuwa pierwszy element */

// tablica.push('Ooooooops'); /* dodajemy element na końcu */
// tablica.pop(); /* usuwamy element na końcu */



let tablica = ['Michal', 'Ola', 'Ola ma kota', 'Martyna', 'Iza', 'Arek'];

tablica.slice(1, 3); /* wycina nam kawalek tablicy i nie modyfikuje tablicy */

console.log(tablica.slice(1, 3));  // modyfikuje orginalną tablicę, ilośc elementów + 1




// tablica.splice(3, 0, 'Daria');   // 0 - wrzuci w środek tablicy, wstawia po 3 elemencie

// tablica.splice(2, 1, 'Daria');  // 1 - usuwa/ zastępuje, który element, nie robimy kombinacji element + 1, to tylko gdy dajemy 0

let tablicaLiczba = [0, 1, 9, 555, 8, 0, 87, -10, -404]; // sort nie sortuje liczb
// tablicaLiczba.sort();
// tablica.sort();

tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2) => {
return liczba1 - liczba2
});

console.log(tablicaLiczba);

console.log(tablicaLiczba.length);  // lenght pokazuje ile mamy elementow w tablicy




OBIEKTY


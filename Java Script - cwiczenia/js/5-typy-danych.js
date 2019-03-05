/* let typLiczba = 10 + 10;

typLiczba = "10" + 10 + 20;

typLiczba = `10 + 10 = ${10 + 10}`;

typLiczba = `10 + ` + `10 =` + (10 + 10);

console.log(typLiczba); */


// typ boolean

/* let typLiczba = 4 + 4 === 8;

console.log(typLiczba); */

// array 
/* let typLiczba = 10 + 10;
let tablica = [typLiczba, 'Ola ma kota', true, 2 + 2];

console.log(tablica[1]); */


/* let przykladowyObiekt = {id: 3, imie: 'Kacper'};

console.log(przykladowyObiekt.imie, przykladowyObiekt.id);
 */


/* let tablica = [3, 'Ola ma kota', 10 + 10];
tablica[1] = 'Ola ma czarnego kota';
tablica[1] = {imie: 'Ola', ma: 'czarnego kot'}

console.log(tablica[1]);  */

// odwrócenie elementów w tablicy
/* let tablica = [3, 'Ola ma kota', 10];
tablica.reverse();
console.log(tablica); */

// dodajemy element na poczatku
/* let tablica = [3, 'Ola ma kota', 10];
tablica.unshift('Ooooooops'); 
console.log(tablica); */

//  usuwa pierwszy element
/* let tablica = ['Ooooooops', 3, 'Ola ma kota', 10];
tablica.shift();
console.log(tablica); */

//  dodajemy element na końcu
/* let tablica = ['Ooooooops', 3, 'Ola ma kota', 10];
tablica.push('Ooooooops');
console.log(tablica); */

// usuwamy element na końcu
/* let tablica = ['Ooooooops', 3, 'Ola ma kota', 10];
tablica.pop(); 
console.log(tablica); */

// wycina nam kawalek tablicy, zostawia tylko to co jest w slice od pierwszej cyfry do przedostatniej
//  i nie modyfikuje tablicy a zwraca nowa kopię
/* let tablica = ['Michal', 'Ola', 'Ola ma kota', 'Martyna', 'Iza', 'Arek'];
tablica.slice(0, 2); 
console.log(tablica.slice(0,2)); */


// 0 - wrzuci w środek tablicy, wstawia po 3 elemencie - nie rozumiem tego
/* let tablica = ['Michal', 'Ola', 'Ola ma kota', 'Martyna', 'Iza', 'Arek'];
tablica.splice(3, 0, 'Daria');
console.log(tablica.splice(3, 0,'Daria')); */

// tablica.splice(2, 1, 'Daria');  // 1 - usuwa/ zastępuje, który element, nie robimy kombinacji element + 1, to tylko gdy dajemy 0

// sort nie sortuje liczb, tylko np. od a-z
/* let tablicaLiczba = [0, 1, 9, 555, 8, 0, 87, -10, -404]; 
tablicaLiczba.sort();
console.log(tablicaLiczba.sort()); */

// zapis rozbudowany
/* let tablicaLiczba = [0, 1, 9, 555, 8, 0, 87, -10, -404]; 
tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2) => {
return liczba1 - liczba2
});

console.log(tablicaLiczba); */

// lenght pokazuje ile mamy elementow w tablicy
let tablicaLiczba = [0, 1, 9, 555, 8, 0, 87, -10, -404]; 
console.log(tablicaLiczba.length);  
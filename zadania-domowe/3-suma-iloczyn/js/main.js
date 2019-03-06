let tablica = [1, 2, 3, 4, 5, 6];

function sumaTablica() {
    let suma = 0;
    let mnozenie = 1;

  for (let index = 0; index < tablica.length; index++) {
        suma += tablica[index];
        mnozenie *= tablica[index];
    }
    console.log(suma, mnozenie);
}

sumaTablica(1,2,3,4,5,6);

/* 
let tablica = [1, 2, 3, 4, 5, 6];
let suma = 0;
let mnozenie = 1;

for (let index = 0; index < tablica.length; index++) {
        suma += tablica[index];
        mnozenie *= tablica[index];
    }

console.log(suma, mnozenie); */
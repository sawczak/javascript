let tablica = [0,1,2,3,4,5];


let mnozenie = 1;

for (let index = 0; index < tablica.length; index++) {
        suma += tablica[index];
        mnozenie *= tablica[index];
    }

console.log(suma, mnozenie);


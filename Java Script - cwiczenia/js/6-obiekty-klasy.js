class Osoba {
    constructor(name, surname) {
        this.baseName = name;   //klucz moze sie nazywac jak chcemy, wiec np. baseName
        this.baseSurname = surname; //name i surname są to wartości do klucza, które pobieramy z parametru construction
    }
    przedstawOsobe() {
        return `Mam na imię ${this.baseName} ${this.baseSurname}`;
      
    }
};


// const Osoba = require('../sciezka') Gdy dopisujemy kod i nie mamy dostepu do klasy wyżej, bo jest namespace. w innym pliku

let maks = new Osoba('Maks', 'Kowalski');
maks.kolorOczu = 'brązowy';

maks.jakiJestKolorOczu = () => {  //tworzymy instancję do klasy i dobudowujemy, maks.jakiJestKolor... - to jest instancja
    return maks.kolorOczu;
}

console.log(maks.jakiJestKolorOczu());
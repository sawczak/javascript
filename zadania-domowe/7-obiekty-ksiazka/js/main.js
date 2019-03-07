class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
    }

opiszKsiazke() {
  if (this.przeczytana === true) {
  console.log( `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.` );
  }
  else {
    console.log( `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.` );
    }
  }
}

let jakZawsze = new Ksiazka('Jak zawsze', 'Zygmunt Miłoszewski', true);
let ziarnoPrawdy = new Ksiazka('Ziarno Prawdy', 'Zygmunt Miłoszewski', true);
let bezcenny = new Ksiazka('Bezcenny', 'Zygmunt Miłoszewski', false);


/* jakZawsze.opiszKsiazke();
ziarnoPrawdy.opiszKsiazke();
bezcenny.opiszKsiazke();

 */


let tablicaK = [jakZawsze, ziarnoPrawdy, bezcenny];

function iloscPrzeczytanych(parametr) {
  let suma = 0;

  parametr.forEach((element, index) => {
    if (element.przeczytana === true) {
      suma += 1;
      }
      
      console.log(element.opiszKsiazke());
  });
  
  console.log('Liczba przeczytanych książek to ' + suma);

}

iloscPrzeczytanych(tablicaK);
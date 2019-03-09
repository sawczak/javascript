let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function babelkowanie(tab) {
  let licznik = 0;

  for (let i = 0; i < tab.length; i++) {
    for (let x = 0; x < tab.lenght-i; x--) {

      if (tab[x] > tab[x+1]) {
        let licznik = tab[x];
        tab[x] = tab[x+1];
        tab[x+1] = licznik;
      }
    }
    
  }
  return licznik;  
}

let wynik = babelkowanie(tablica);
console.log( wynik );
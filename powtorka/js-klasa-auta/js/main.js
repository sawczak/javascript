class Auto {
    constructor(markaKlasy, pojemnoscKlasy, model, kolor, bezwypadkowy = true) {
      this.marka = markaKlasy; 
      this.pojemnosc = pojemnoscKlasy; //this - przypisuje konkretny obiekt
      this.model = model;
      this.kolor = kolor;
      this.bezwypadkowy = bezwypadkowy; 
    }
  
    jedzieDoPrzodu() {
      return 'Auto jedzie do przodu!';
    }
  
    cofa() {
      return 'Auto cofa';
    }
  
    pokazAuto() {
      return `Auto: ${this.marka}, model: ${this.model}, kolor: ${this.kolor}, bezwypadkowy: ${this.bezwypadkowy}`;
    }
  }
  
  let autoArka = new Auto('Porsche', '4.0', '911', 'grafitowy', false);
  let autoMarka = new Auto('Citroen', '1.6', 'C4Picasso', 'zielony', false);
  let autoInny = new Auto('BMW', '7.0', 'X4', 'czarny', false);
  let autoMichala = new Auto('Mazda', '3.0', '6', 'koralowy', true);
  let autoPawla = new Auto('Toyota', '2.0', 'Avensis', 'ciemnozielony', true);
  
  // autoMarka.pokazAuto();
  
  //trzeba przeiterowac wszytskie obiekty, aby pokazać wsztsko - potrzebna pętla, wywołuje sie ja na tablicy
  
  let tablica = [autoArka, autoMarka, autoInny, autoMichala, autoPawla];
  
  console.log(tablica);
  // console.log(tablica.length);
  
  //zwracamy liczbe samochodów bezwypadkowych
  /* 
  function iloscBezwypadkowych(tablicaAut) {
    let licznik = 0;
  
    // console.log(tablicaAut);
    tablicaAut.forEach(function(element, index) {
      if (element.bezwypadkowy) {
        licznik++;
      }
      // console.log(element.bezwypadkowy);
    });
  
    return licznik;
  
  }
  
  iloscBezwypadkowych(tablica); */
  
  
  //zwraca nam samochody bezwypadkowe ze wszystkimi informacjami
  function iloscBezwypadkowych(tablicaAut) {
    let licznik = [];
  
    // console.log(tablicaAut);
    tablicaAut.forEach(function(element, index) {
      if (element.bezwypadkowy) { //jesli dodamy !element to pokaże nam samochody, które uległy wypadkowi
        licznik.push(element);
      }
      // console.log(element.bezwypadkowy);
    });
  
    return licznik;
  
  }
  
  iloscBezwypadkowych(tablica);

  
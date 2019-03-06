
let tablica = [0,1,2,3,4,5,6];

function sumaKwadratow(tablicaSuma) {
  let sumaK = 0;

  for (let index = 0; index < tablicaSuma.length; index++) {
      sumaK += Math.pow(tablicaSuma[index], 2);
    }
  return sumaK;  
}

let wynikDzialaniaFunkcji = sumaKwadratow(tablica);
console.log( wynikDzialaniaFunkcji );


// pętla for z dwoma tablicami
let tablica = [0,1,2,3,4,5,6];
let drugaTablica = [0,1,2,3,4,5,6,7,8,9,10];

function sumaKwadratow(tablicaSuma) {
  let sumaK = 0;

  for (let index = 0; index < tablicaSuma.length; index++) {
      sumaK += Math.pow(tablicaSuma[index], 2);
    }
  return sumaK;  
}

let wynikDzialaniaFunkcji = sumaKwadratow(tablica);
console.log( wynikDzialaniaFunkcji );

let wynikDrugiej = sumaKwadratow(drugaTablica);
console.log( wynikDrugiej );



//z wykorzystaniem pętli forEach
let tablica = [0, 1, 2, 3, 4, 5];

function sumaKwadratow(parametrFunkcji) {
  let sumaK = 0;
  parametrFunkcji.forEach((element, index) => {
    sumaK += Math.pow(element, 2);
  });

  return sumaK;
}

let wynik = sumaKwadratow(tablica);
console.log(wynik);
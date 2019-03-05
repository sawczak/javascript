// const liczbaRandomowa = Math.floor(Math.random() * 20);  //math floor stałe liczby, bez tego będzie pokazywac liczby po przecinku
 // pokaże liczby max do 20 / math.ceil - zaokrągla w górę



//  console.log(liczbaRandomowa);


/* 
let napis = ('Akademia108') => {
    const rozdzielenie = napis.split();
    const odwracamy = rozdzielenie.reverse(); 
    const laczymy = odwracamy.join();

}

console.log(laczymy); */


  /*   const napisWspak = (tekst) => {
        return tekst.split('').reverse('').join('');
    }   
    
    console.log(napisWspak('Akademia108')); */


    
    
    let wspak = function(napis) {
        let rozdzielamy = napis.split('');
        let odwracamy = rozdzielamy.reverse('');
        let laczymy = odwracamy.join('');
        
        return laczymy;
        }
        console.log(wspak('Akademia108'));
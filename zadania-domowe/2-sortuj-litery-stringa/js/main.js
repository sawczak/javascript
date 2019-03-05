let sortowanie = function(napis) {
    let rozdzielamy = napis.split('');
    let sortujemy = rozdzielamy.sort();
    let laczymy = sortujemy.join('');
        
    return laczymy;
}

console.log(sortowanie('Akademia108'));
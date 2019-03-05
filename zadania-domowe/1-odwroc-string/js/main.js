let wspak = function(napis) {
    let rozdzielamy = napis.split('');
    let odwracamy = rozdzielamy.reverse('');
    let laczymy = odwracamy.join('');
        
    return laczymy;
}

console.log(wspak('Akademia108'));
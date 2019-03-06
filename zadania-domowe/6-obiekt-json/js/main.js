let jsonPracownicy = {
  "pracownicy":[
      {"firstName": "Krystian", "lastName": "Dziopa"}, 
      {"firstName": "Anna", "lastName": "Szapiel"},
      {"firstName": "Piotr", "lastName": "Żmuda"}
  ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index) {
  console.log('Pracownik o numerze' + index + 'ma na imię' + element.firstName + 'zaś na nazwisko' + element.lastname );
});

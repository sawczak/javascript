let emelent;

element = document.getElementById('parFirst'); //dla id
element = document.getElementsByClassName('link')/* [document.getElementsByClassName('link').lenght - 1] */; //dla Class
element = document.getElementsByTagName('p')[0]; //wszystkie paragrafy, ale jak podamy [0] to pokaże pierwszy paragraf
element = document.querySelector('#sectionFirst .parSecond .par2'); // szukanie paragrafu w danej sekcji
element = document.querySelectorAll('#sectionFirst a'); //wszystkie linki po tagu "a" w sekcji sectionFirst


console.log(element);
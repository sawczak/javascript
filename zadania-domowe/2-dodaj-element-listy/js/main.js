
let btn = document.querySelector('button');

btn. funkcjaKlik = () => {
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.appenChild(document.createTextNode('item 4'));
    li.setAttributeNode('class', 'item');
    ul.appendChild('li');
}}

btn.addEventListener('click', funkcjaKlik);

// document.querySelector('button')


// document.querySelector('button').addEventListener('click', funkcjaKlik);

/* let btn = document.querySelector('button');

funkcjaKlik = () => {
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.appenChild(document.createTextNode('item 4'));
    li.setAttribute('class', 'item');
    ul.appendChild(li);
}}

btn.addEventListener('click', funkcjaKlik);
// document.querySelector('button').addEventListener('click', funkcjaKlik);


 */

 

let btn = document.querySelector('button');
let counter = document.getElementsByClassName('item').length;

funkcjaKlik = () => {
    let ul = document.getElementById('items');
    let li = document.createElement('li');

    if (counter === document.getElementsByClassName('item').length) {
        counter += 1;

        // console.log(counter);
    }
    li.appendChild(document.createTextNode('item ' + counter));
    li.setAttribute('class', 'item');
    ul.appendChild(li);
    counter += 1;
    console.log(counter);
}

btn.addEventListener('click', funkcjaKlik);



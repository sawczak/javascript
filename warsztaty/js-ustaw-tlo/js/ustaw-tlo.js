/* let par1 = document.getElementsByTagName('p')[0];
let par2 = document.getElementsByTagName('p')[1]; */

let par1 = document.querySelector('.p1');
let par2 = document.querySelector('.p2');

ustawTlo = () => {
    par1.style.backgroundColor = 'red';
    par2.style.backgroundColor = 'yellow';
}

document.querySelector('.przycisk').onclick = ustawTlo;


const menu = document.querySelector('#menu_icon');
const nav = document.querySelector('.navlist');
const main = document.querySelector('main');

menu.onclick = () =>{
    menu.classList.toggle('bx_x')
    nav.classList.toggle('open')
    main.classList.toggle('open')
}
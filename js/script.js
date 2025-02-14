'use strict';

let barsA = document.getElementsByClassName('barsA')[0];
let menuCloseBtn = document.getElementsByClassName('menuCloseBtn')[0];
let menuList = document.getElementsByClassName('menuList')[0];
let menuCloseMobile = document.getElementsByClassName('menu-Close')[0];


barsA.addEventListener('click', () => {
    menuList.classList.toggle('menuListOpen');
    menuCloseMobile.classList.toggle('menuOpen');

})

menuCloseBtn.addEventListener('click', () =>{
    menuList.classList.remove('menuListOpen')
    menuCloseMobile.classList.remove('menuOpen');
})

AOS.init({
    once: false,
});
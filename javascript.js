let navbar = document.querySelector('nav');
let menu-links = document.getElementById('menu-links');

function toogleMenu(){
    menu-links.classList.toggle('show-menu');
}
window.onscroll = function (){
    if (window.scrollY > 0){
        navbar.style.background = '#eefff9';
    }else {
        navbar.style.background = 'transparent';
    }
}
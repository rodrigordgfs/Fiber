// Hamburguer Menu
const btnMobile = document.getElementById('header__nav__btn-mobile');
const menu = document.getElementById('header__nav__menu');
const nav = document.getElementById('header__nav');

function toogleMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

function toogleItemMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchStart', toogleMenu);
menu.addEventListener('click', toogleItemMenu);
menu.addEventListener('touchStart', toogleItemMenu);
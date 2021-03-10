window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__nav__link'),
    hamburger = document.querySelector('.header__hamburger'),
    store = document.querySelector('.phone__store');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__nav_active');
        store.classList.toggle('phone__store_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__nav_active');
            store.classList.toggle('phone__store_active');
        });
    });
});
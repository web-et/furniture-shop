// Открытие/закрытие меню
// 1. Найти элемент кнопки и найти меню, которое будем скрывать
let burgerElement = document.querySelector('.header-burger');
let menu = document.querySelectorAll('.nav-list');

if (burgerElement && menu) {
    // 2. При нажатии на бургер переключать класс .nav-list-hidden
    burgerElement.addEventListener('click', () => {
        for (let item of menu) {
            item.classList.toggle('nav-list-hidden');
        }
    });
}
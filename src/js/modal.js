// Чтобы открыть модальное окно
// 1. Найти на странице кнопку открытия модального окна и само модальное окно
// 2. При клике на кнопку добавить класс к модальному окну
let button = document.querySelector('.js-sign-modal');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close');

let closeModal = () => {
    modal.classList.remove('modal--open');

    // Когда модальное окно закрыли
    // 1. Отписаться от клика на кнопку закрытия
    closeButton.removeEventListener('click', closeModal);
    button.focus();
};

button.addEventListener('click', () => {
    modal.classList.add('modal--open');

    // Когда модальное окно открыто
    // 1. При нажатии на кнопку закрытия закрыть модальное окно
    closeButton.addEventListener('click', closeModal);
    closeButton.focus();
});
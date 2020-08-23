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

if (button && modal) {
    button.addEventListener('click', () => {
        modal.classList.add('modal--open');
    
        if (closeButton) {
            // Когда модальное окно открыто
            // 1. При нажатии на кнопку закрытия закрыть модальное окно
            closeButton.addEventListener('click', closeModal);
            closeButton.focus();
        }
    });
}

// Отправка формы на сервер
// 1. Найти элемент формы
let form = document.querySelector('.modal__form');

if (form) {
    // 2. Подписаться на событие отправки
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // 3. Отправить данные
        // 3.1. Достать данные для отправки
        let url = form.action;

        let inputs = form.querySelectorAll('input');
        let data = new FormData();

        for (let input of inputs) {
            data.append(input.name, input.value);
        }

        // 3.2. Сделать запрос
        fetch(url, {
            method: form.method,
            body: data,
        })
            .then((data) => data.json())
            .then((data) => {
                // 4. Показать, что данные отправились
                // 4.1.1. Найти элемент заголовка
                // let title = document.querySelector('.modal-title');
                // 4.1.2. Подставить email
                // title.textContent = 'OK. Email is ' + data.form.login;

                // 4.2.1 Вызвать алерт
                alert('OK. Email is ' + data.form.login);

                // 5. Очистить форму
                form.reset();
            });
    });
}
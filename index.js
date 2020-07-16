// Открытие/закрытие меню
// 1. Найти элемент кнопки и найти меню, которое будем скрывать
let burgerElement = document.querySelector('.header-burger');
let menu = document.querySelectorAll('.nav-list');

// 2. При нажатии на бургер переключать класс .nav-list-hidden
burgerElement.addEventListener('click', () => {
    for (let item of menu) {
        item.classList.toggle('nav-list-hidden');
    }
});


// Отправка формы на сервер
// 1. Найти элемент формы
let form = document.querySelector('.modal-form');

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
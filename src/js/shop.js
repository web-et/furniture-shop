import { products, getProduct } from './products';

const goodsContainer = document.querySelector('.shop-goods');

if (goodsContainer) {
    let mode;
    let page = 1;
    const count = 4;

    const moreButton = document.querySelector('.shop__button-more');
    const dropdownButtons = document.querySelectorAll('.dropdown__menu-button');

    const render = () => {
        // Формируем массив продуктов
        let list = products;
        
        // Популярные товары сортируем по убыванию рейтинга
        // Дешевые товары по возрастанию цены
        if (mode === 'popular') {
            list = products.sort((a, b) => b.rating - a.rating);
        } else if (mode === 'cheeper') {
            list = products.sort((a, b) => a.price - b.price);
        }

        // Обрезаем кусок продуктов, чтобы работала пагинация
        list = list.slice(0, page * count);

        // Рисуем элементы на странице
        list.forEach((item) => {
            // Создаем тег template
            const template = document.createElement('template');
            // Добавляем в него разметку продукта
            template.innerHTML = getProduct(item);
            // Добавляем элемент на страницу
            goodsContainer.appendChild(template.content);
        });

        // Если отрисовали все продукты на странице,
        // то больше не обрабатываем кнопку «Показать еще»
        if (products.length <= page * count) {
            moreButton.removeEventListener('click', increasePage);
        }
    };
    const increasePage = () => {
        // При нажатии на кнопку «Показать еще»,
        // увеличиваем страницу и рендерим список заново
        page++;
        goodsContainer.innerHTML = '';
        render();
    };

    if (dropdownButtons.length) {
        // Превращаем псевдомассив элементов в настоящий массив
        Array.from(dropdownButtons).forEach((button) => {
            button.addEventListener('click', () => {
                // Забираем значение кнопки из разметки
                const buttonMode = button.dataset.mode;

                // Если оно совпадает с текущим значением, выходим из функции
                if (buttonMode === mode) {
                    return;
                }

                // Если не совпадает, то перересовываем список с новым значением
                goodsContainer.innerHTML = '';
                mode = buttonMode;
                render();
            })
        });
    }

    if (moreButton) {
        moreButton.addEventListener('click', increasePage);
    }
    
    // Рендерим данные
    render(products);
}
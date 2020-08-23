// Данные по продуктам в виде массива объектов
export const products = [
    {
        href: '/product.html',
        imageName: 'ysette',
        name: 'Ysette',
        type: 'Ceiling Light',
        price: 129,
        sale: false,
        rating: 3,
    },
    {
        href: '/product.html',
        imageName: 'porgei',
        name: 'Porgei',
        type: 'Ceramic Bathtub',
        price: 1695,
        sale: true,
        rating: 3.4,
    },
    {
        href: '/product.html',
        imageName: 'monsage',
        name: 'Monsage',
        type: 'Sofa',
        price: 647,
        sale: false,
        rating: 5,
    },
    {
        href: '/product.html',
        imageName: 'lomme',
        name: 'Lomme',
        type: 'Table',
        price: 329,
        sale: false,
        rating: 2.9,
    },
    {
        href: '/product.html',
        imageName: 'hloga',
        name: 'Hloga',
        type: 'Ceiling Light',
        price: 129,
        sale: false,
        rating: 4.6,
    },
    {
        href: '/product.html',
        imageName: 'derpe',
        name: 'Derpe',
        type: 'Deco Chair',
        price: 189,
        sale: false,
        rating: 5,
    },
    {
        href: '/product.html',
        imageName: 'olerre',
        name: 'Olerre',
        type: 'Minimal Lamp',
        price: 345,
        sale: false,
        rating: 4,
    },
    {
        href: '/product.html',
        imageName: 'gredde',
        name: 'Gredde',
        type: 'Ceiling Light',
        price: 549,
        sale: false,
        rating: 3.8,
    },
    {
        href: '/product.html',
        imageName: 'passer',
        name: 'Passer',
        type: 'Basket',
        price: 89,
        sale: true,
        rating: 2.6,
    },
    {
        href: '/product.html',
        imageName: 'june',
        name: 'June',
        type: 'Wall Clock',
        price: 475,
        sale: false,
        rating: 4.3,
    },
    {
        href: '/product.html',
        imageName: 'kjoe',
        name: 'Kjoe',
        type: 'Leather Sofa Chair',
        price: 865,
        sale: false,
        rating: 4,
    },
    {
        href: '/product.html',
        imageName: 'woert',
        name: 'Woert',
        type: 'Ceramic Wood Pot',
        price: 125,
        sale: false,
        rating: 5,
    },
];

// Функция, которая возвращает верстку в виде строки
// data - объект из массива выше
export const getProduct = (data) => `
<a href="/product.html" class="shop-goods__item${data.sale ? ' shop-goods__item--sale' : ''}">
    <div class="shop-goods__item-image-container">
        <picture>
            <source srcset="images/${data.imageName}.webp 1x, images/${data.imageName}@2x.webp 2x" type="image/webp" />
            <source srcset="images/${data.imageName}.png 1x, images/${data.imageName}@2x.png 2x" type="image/png" />
            <img class="shop-goods__item-image" src="images/${data.imageName}.png" srcset="images/${data.imageName}.png 1x, images/${data.imageName}@2x.png 2x" alt="${data.name}">
        </picture>
    </div>
    <h2 class="shop-goods__item-title">${data.name}</h2>
    <p class="shop-goods__item-text">${data.type}</p>
    <span class="shop-goods__item-price">$${data.price}</span>
</a>
`;
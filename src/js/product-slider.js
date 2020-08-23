import Swiper from 'swiper';

new Swiper('.similiar-products__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 70,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 100,
        },
    },
});
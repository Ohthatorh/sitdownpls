const mainBannerSwiper = new Swiper(('.main__front-banner-swiper'), {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // }
})

const mainSpecialSwiper = new Swiper(('.main__special-swiper'), {
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: '.special-arrow-right',
        prevEl: '.special-arrow-left',
    },
    breakpoints: {
        320: {
            slidesPerGroup: 1,
        }
    }
})

const mainUsefulSwiper = new Swiper(('.main__useful-swiper'), {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
        nextEl: '.useful-arrow-right',
        prevEl: '.useful-arrow-left',
    },
})
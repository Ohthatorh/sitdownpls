const mainBannerSwiper = new Swiper(('.main__front-banner-swiper'), {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
})
const mainSpecialSwiper = new Swiper(('.main__special-swiper'), {
    spaceBetween: 32,
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.special-arrow-right',
        prevEl: '.special-arrow-left',
    },
    breakpoints: {
        1366: {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
        },
        1025: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
})
const mainUsefulSwiper = new Swiper(('.main__useful-swiper'), {
    spaceBetween: 32,
    navigation: {
        nextEl: '.useful-arrow-right',
        prevEl: '.useful-arrow-left',
    },
    breakpoints: {
        1366: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1
        }
    }
})

const highrateButton = document.querySelector('.main__highrate-btn')
highrateButton.addEventListener('click', e => {
    e.preventDefault()
    highrateButton.style.display = 'none'
    const highrateHiddenItems = document.querySelectorAll('.main-product-item:nth-child(n + 9)')
    highrateHiddenItems.forEach (el => {
        el.style.display = 'block'
        setInterval(() => {
            el.style.opacity = 1
        }, 500)
    })
})
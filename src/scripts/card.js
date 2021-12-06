const mainCardSwiper = new Swiper(('.main__card-swiper'), {
    spaceBetween: 32,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    breakpoints: {
        1367: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            spaceBetween: 16
        }
    }
})
const tlModalForm = gsap.timeline({paused: true})
const tlOverlay = gsap.timeline({paused: true})
const tlImg = gsap.timeline({paused: true})
tlOverlay.fromTo('.form-modal-overlay', {display: 'none'},{display: 'block', duration: 0.4})
tlImg.fromTo('.form-modal__photo', {display: 'none', top: '62%'},{display: 'block', top: '67%', duration: 0.5})
tlModalForm.fromTo('.form-modal__window', {y: -30, display: 'none', opacity: 0},{y: 0, display: 'block', opacity: 1, duration: 0.5})
const imageWrap = document.querySelector('.main__card-product-images')
imageWrap.addEventListener('click', () => {
    tlImg.play()
    tlOverlay.play()
})
document.addEventListener('click', e => {
    if (e.target.className === 'main__card-product-btn') {
        tlModalForm.play()
        tlOverlay.play()
    }
    if (e.target.className === 'modal-close') {
        if (e.target.parentNode.classList.contains('form-modal__window')) {
            tlModalForm.reverse()
        } else {
            tlImg.reverse()
        }
        tlOverlay.reverse()
    }
    if (e.target.className === 'form-modal-overlay') {
        if (e.target.nextElementSibling.style.display === 'block') {
            tlModalForm.reverse()
        } else {
            tlImg.reverse()
        }
        tlOverlay.reverse()
    }
})

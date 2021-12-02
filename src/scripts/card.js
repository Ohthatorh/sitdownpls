const mainCardSwiper = new Swiper(('.main__card-swiper'), {
    spaceBetween: 32,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    }
})
const tlModalForm = gsap.timeline({paused: true})
const tlOverlay = gsap.timeline({paused: true})
const tlImg = gsap.timeline({paused: true})
tlOverlay.fromTo('.form-modal-overlay', {display: 'none'},{display: 'block', duration: 0.4})
tlImg.fromTo('.main__card-product-images', {top: '45%'},{top: '50%', duration: 0.5})
tlModalForm.fromTo('.form-modal__window', {y: -30, display: 'none', opacity: 0},{y: 0, display: 'block', opacity: 1, duration: 0.5})
document.addEventListener('click', e => {
    if (e.target.className === 'main__card-product-btn') {
        tlModalForm.play()
        tlOverlay.play()
    }
    if (e.target.className === 'modal-close') {
        if (imageWrap.classList.contains('img-active')) {
            tlImg.reverse()
            imageWrap.classList.remove('img-active')
        } else {
            tlModalForm.reverse()
        }
        tlOverlay.reverse()
    }
    if (e.target.className === 'form-modal-overlay') {
        if (imageWrap.classList.contains('img-active')) {
            tlImg.reverse()
            imageWrap.classList.remove('img-active')
        } else {
            tlModalForm.reverse()
        }
        tlOverlay.reverse()
    }
})
const imageWrap = document.querySelector('.main__card-product-images')
imageWrap.addEventListener('click', () => {
    imageWrap.classList.add('img-active')
    tlImg.play()
    tlOverlay.play()
})
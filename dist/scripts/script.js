const categoryButton = document.querySelector('.header__bot-row-form-category-btn')
categoryButton.addEventListener('click', e => {
    e.preventDefault()
})
const highrateButton = document.querySelector('.main__highrate-btn')
highrateButton.addEventListener('click', e => {
    e.preventDefault()
    highrateButton.style.display = 'none'
    const highrateHiddenItems = document.querySelectorAll('.main__highrate-list-item:nth-child(n + 9)')
    highrateHiddenItems.forEach (el => {
        el.style.display = 'block'
        setInterval(() => {
            el.style.opacity = 1
        }, 500)
    })
})
const contactUsInputs = document.querySelectorAll('.main__contactus-form-input')
const contactUsButton = document.querySelector('.main__contactus-form-button')
contactUsButton.addEventListener('click', () => {
    contactUsInputs.forEach (el => {
        if (!el.classList.contains('js-validate-error-field')) el.classList.add('js-validate-success-field')
    })
})
const burgerButton = document.querySelector('.hamburger--spring')
const listSide = document.querySelector('.header__bot-row-list')
const tlListSide = gsap.timeline({paused: true})
tlListSide.fromTo(listSide, {opacity: 0}, {opacity: 1, duration: 0.1})
    .fromTo('.header__bot-row-list-item:first-child', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
    .fromTo('.header__bot-row-list-item:nth-child(2)', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
    .fromTo('.header__bot-row-list-item:nth-child(3)', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
    .fromTo('.header__bot-row-list-item:nth-child(4)', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
    .fromTo('.header__bot-row-list-item:nth-child(5)', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
    .fromTo('.header__bot-row-list-item:last-child', {y: -30, x:52, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('is-active')) {
       burgerButton.classList.add('is-active') 
       listSide.classList.add('list-active')
       tlListSide.play();
    } else {
        burgerButton.classList.remove('is-active')
        tlListSide.reverse();
    }
})
listSide.addEventListener('click', (e) => {
    tlListSide.reverse();
    burgerButton.classList.remove('is-active')
    listSide.classList.remove('list-active')
})
const headerRegionSelect = document.querySelector('.header__top-row-region-choice')
const choicesRegion = new Choices(headerRegionSelect, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
        list: 'choices__list-header-top',
        item: 'choices__item-header-top'
    }
})
const headerRegionSelectMainList = document.querySelector('.choices__list-header-top')
headerRegionSelectMainList.addEventListener('click', () => {
    const headerRegionSelectItems = document.querySelectorAll('.choices__item-header-top')
    headerRegionSelectItems.forEach(e => {
        if (e.classList.contains('is-selected')) e.style.display = 'none'
    })
})
const headerCategorySelect = document.querySelector('.header__bot-row-form-category-choice')
const choicesCategory = new Choices(headerCategorySelect, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
        list: 'choices__list-header-bot',
        item: 'choices__item-header-bot'
    }
})
const burgerButton = document.querySelector('.hamburger--spring')
const listSide = document.querySelector('.header__bot-row-list')
const listHeader = document.querySelector('.header__top-row-list')
const tlListSide = gsap.timeline({paused: true})
if (innerWidth < 1024) {
    tlListSide.fromTo('.header__bot-row-list-item:first-child', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__bot-row-list-item:nth-child(2)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__bot-row-list-item:nth-child(3)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__bot-row-list-item:nth-child(4)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__bot-row-list-item:nth-child(5)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__bot-row-list-item:last-child', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
}
if (innerWidth < 768) {
    tlListSide.fromTo('.header__top-row-list-item:first-child', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__top-row-list-item:nth-child(2)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__top-row-list-item:nth-child(3)', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
        .fromTo('.header__top-row-list-item:last-child', {y: -30, opacity: 0},{y: 0,opacity: 1,duration: 0.1})
}
burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('is-active')) {
       burgerButton.classList.add('is-active') 
       listSide.classList.add('list-active')
       listHeader.classList.add('list-active')
       tlListSide.play()
    } else {
        burgerButton.classList.remove('is-active')
        listSide.classList.remove('list-active')
        listHeader.classList.remove('list-active')
        tlListSide.reverse()
    }
})
listSide.addEventListener('click', (e) => {
    tlListSide.reverse()
    burgerButton.classList.remove('is-active')
    listSide.classList.remove('list-active')
})
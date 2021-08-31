const headerRegionSelect = document.querySelector('.header__top-row-region-text-choice')
const headerRegionList = document.querySelector('.header__top-row-region-list')
headerRegionSelect.addEventListener('click', () => {
    headerRegionList.classList.toggle('visually-hidden')
    headerRegionSelect.classList.toggle('choice-active')
}) 

const headerRegionItems = document.querySelectorAll('.header__top-row-region-list-item')
headerRegionItems.forEach (e => {
    e.addEventListener('click', () => {
        headerRegionList.classList.add('visually-hidden')
        headerRegionSelect.classList.remove('choice-active')
        const textFromSelect = headerRegionSelect.textContent
        headerRegionSelect.textContent = e.textContent
        e.textContent = textFromSelect
    })
})

const headerCategorySelect = document.querySelector('.header__bot-row-form-category-btn')
const headerCategoryList = document.querySelector('.header__bot-row-form-list')
headerCategorySelect.addEventListener('click', () => {
    headerCategoryList.classList.toggle('visually-hidden')
    headerCategorySelect.classList.toggle('choice-active')
}) 

const headerCategoryItems = document.querySelectorAll('.header__bot-row-form-list-item')
headerCategoryItems.forEach (e => {
    e.addEventListener('click', () => {
        headerCategorySelect.textContent = e.textContent
        headerCategoryList.classList.add('visually-hidden')
        headerCategorySelect.classList.remove('choice-active')
    })
})
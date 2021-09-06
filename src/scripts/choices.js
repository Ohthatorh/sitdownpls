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
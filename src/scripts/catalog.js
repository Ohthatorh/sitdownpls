const rangeFilter = document.getElementById('filterRange')
const inputFilterRange1 = document.getElementById('input-filter-range-1')
const inputFilterRange2 = document.getElementById('input-filter-range-2')
const inputs = [inputFilterRange1, inputFilterRange2]
const listFilters = document.querySelector('.main__catalog-applied-list')
noUiSlider.create(rangeFilter, {
    start: [2000, 150000],
    connect: true,
    range: {
        'min': 1000,
        'max': 250000
    }
})
rangeFilter.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]).toLocaleString('ru-RU')
    const itemFilterPrice = document.querySelectorAll(`[data-filter="price-${handle}"]`)
    if (itemFilterPrice.length) {
        itemFilterPrice[0].children[0].textContent = `${(handle === 0) ? `От ` : `До `} ${Math.round(values[handle]).toLocaleString('ru-RU')}`
    } else {
        const priceFilterElement = `
            <li class="main__catalog-applied-list-item" data-filter="price-${handle}"]">
                <button class="main__catalog-applied-list-item-btn">
                    ${Math.round(values[handle]).toLocaleString('ru-RU')} 
                </button>
                <span class="btn-close"></span>
            </li>
        `
        listFilters.insertAdjacentHTML('beforeend', priceFilterElement)
    }
})
inputFilterRange1.addEventListener('change', function () {
    rangeFilter.noUiSlider.set([this.value, null])
})
inputFilterRange2.addEventListener('change', function () {
    rangeFilter.noUiSlider.set([null, this.value])
})
const mainCatalogSwiper = new Swiper(('.main__catalog-grid-swiper'), {
    spaceBetween: 32,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 3,
    breakpoints: {
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        769: {
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            spaceBetween: 16,
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
    pagination: {
        el: '.main__catalog-swiper-pagination',
        clickable: 'true',
        type: 'bullets',
        renderBullet: function (index, className) {
            return `<span class="${className}">${index+1}</span>`
        },
    },
})

document.querySelector(`[data-filter="price-0"]`).remove()
const catalogFilterText = document.querySelector('.main__catalog-grid-text')
if (window.outerWidth > 1366) {
    catalogFilterText.textContent = 'Фильтровать по:'
} else {
    catalogFilterText.textContent = 'Фильтры:'
}

const allCategoryFilterElems = Array.from(document.querySelectorAll('.main__catalog-filters-item-checkbox[data-type="category"]'))
const hideCategoryFilterElems = allCategoryFilterElems.filter(el => getComputedStyle(el).display === 'none')
const buttonCategoryFilterMore = document.querySelector('.main__catalog-filters-item-more[data-type="category-filter-button"]')
buttonCategoryFilterMore.textContent = `+ ещё ${hideCategoryFilterElems.length}`
const allColorFilterElems = Array.from(document.querySelectorAll('.main__catalog-filters-item-checkbox[data-type="color"]'))
const hideColorFilterElems = allColorFilterElems.filter(el => getComputedStyle(el).display === 'none')
const buttonColorFilterMore = document.querySelector('.main__catalog-filters-item-more[data-type="color-filter-button"]')
buttonColorFilterMore.textContent = `+ ещё ${hideColorFilterElems.length}`

document.addEventListener('click', (e) => {
    if (e.target.className === 'btn-close') {
        const filterCheckboxes = document.querySelectorAll(`[data-type="${e.target.parentNode.dataset.filter}"]`)
        filterCheckboxes.forEach (el => {
            if (el.textContent.replace(/\s/g, '') === e.target.parentNode.textContent.replace(/\s/g, '')) {
                el.children[0].checked = false
            }
        })
        e.target.parentNode.remove()
    }
    if (e.target.className === 'checkbox visually-hidden') {
        if (!e.target.checked) {
            if (e.target.parentNode.textContent.replace(/\s/g, '') === 'Неважно') {
                const itemFilterSale = document.querySelectorAll('[data-filter="sales"]')
                itemFilterSale[0].remove()
            } else {
                const itemFilters = document.querySelectorAll ('.main__catalog-applied-list-item')
                itemFilters.forEach(el => {
                    if (el.children[0].textContent.replace(/\s/g, '').includes(e.target.parentNode.textContent.replace(/\s/g, ''))) el.remove()
                })
            }
        } else {
            let textFilter
            if (e.target.parentNode.dataset.type !== 'sales') {
                textFilter = e.target.parentNode.textContent.replace(/\s/g, '')
            } else {
                textFilter = (e.target.parentNode.textContent.replace(/\s/g, '') === 'Неважно') ? 'Без скидки' : (!e.target.parentNode.textContent.includes('Более')) ? 'Менее 5000' : 'Более 5000'
            }
            const filterElement = `
                <li class="main__catalog-applied-list-item" data-filter="${e.target.parentNode.dataset.type}">
                    <button class="main__catalog-applied-list-item-btn">
                        ${textFilter}
                    </button>
                    <span class="btn-close"></span>
                </li>
            `
            listFilters.insertAdjacentHTML('beforeend', filterElement)
        }
    }
    if (e.target.className === 'main__catalog-filters-item-more') {
        const selectedFilter = (e.target.dataset.type === 'category-filter-button') ? hideCategoryFilterElems : hideColorFilterElems
        selectedFilter.forEach(el => el.style.display = 'block')
        e.target.remove()
    }
    if (e.target.className === 'main__catalog-filters-item-text') {
        (e.target.parentNode.classList.contains('filter-active')) ? e.target.parentNode.classList.remove('filter-active') : e.target.parentNode.classList.add('filter-active')
    }
})
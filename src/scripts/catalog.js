const rangeFilter = document.getElementById('filterRange')
const inputFilterRange1 = document.getElementById('input-filter-range-1')
const inputFilterRange2 = document.getElementById('input-filter-range-2')
const inputs = [inputFilterRange1, inputFilterRange2]
const listFilters = document.querySelector('.main__catalog-right-column-filter-list')
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
    const itemFilterPrice = document.querySelectorAll('[data-filter="price"]')
    if (itemFilterPrice.length) {
        itemFilterPrice[0].children[0].textContent = 'До ' + Math.round(values[handle]).toLocaleString('ru-RU')
    } else {
        const priceFilterElement = `
            <li class="main__catalog-right-column-filter-list-item" data-filter="price">
                <button class="main__catalog-right-column-filter-list-item-btn">
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
const mainCatalogSwiper = new Swiper(('.main__catalog-swiper'), {
    spaceBetween: 32,
    slidesPerView: 3,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 3,
    pagination: {
        el: '.main__catalog-swiper-pagination',
    },
})
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
                const itemFilters = document.querySelectorAll ('.main__catalog-right-column-filter-list-item')
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
                <li class="main__catalog-right-column-filter-list-item" data-filter="${e.target.parentNode.dataset.type}">
                    <button class="main__catalog-right-column-filter-list-item-btn">
                        ${textFilter}
                    </button>
                    <span class="btn-close"></span>
                </li>
            `
            listFilters.insertAdjacentHTML('beforeend', filterElement)
        }
    }
})
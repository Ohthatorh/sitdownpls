const rangeFilter = document.getElementById('filterRange')
const inputFilterRange1 = document.getElementById('input-filter-range-1')
const inputFilterRange2 = document.getElementById('input-filter-range-2')
const inputs = [inputFilterRange1, inputFilterRange2]
noUiSlider.create(rangeFilter, {
    start: [10000, 102000],
    connect: true,
    range: {
        'min': 2000,
        'max': 150000
    }
})
rangeFilter.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]).toLocaleString('ru-RU')
})
inputFilterRange1.addEventListener('change', function () {
    rangeFilter.noUiSlider.set([this.value, null])
})
inputFilterRange2.addEventListener('change', function () {
    rangeFilter.noUiSlider.set([null, this.value])
})
inputFilterRange1.value = '2 000'
inputFilterRange2.value = '150 000'

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
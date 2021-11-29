ymaps.ready(init);
let map
function init(){
    map = new ymaps.Map('js-map', {
        center: [55.75390533341984, 37.632903916038224],
        zoom: 15,
        controls: []
    })
    const placemark = new ymaps.Placemark([55.751528, 37.641512], {
        balloonContentHeader: `
            <h3 class="map-header-title">SitDownPls на Солянке</h3>
            <p class="map-header-description">м. Китай-город, ул. Солянка, д.24</p>
            <a href="tel:84958854547" class="map-header-tel">
                <svg width="18" height="18" viewBox="0 0 18 18">
                    <use xlink:href="img/sprite.svg#phone-svg" id="phone-svg" fill="#FF862F"></use>
                </svg>
                +7 (495) 885-45-47
            </a>
        `,
        balloonContentBody: `
            <p class="map-body-text"><span class="span-text">Часы работы:</span> с 10:00 до 21:00</p>
        `,
        balloonContentFooter: `
            <p class="map-footer-text"><span class="span-text">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/favicon.svg',
        iconImageSize: [30, 45],
        iconImageOffset: [-3, -42],
    })
    map.geoObjects.add(placemark)
    placemark.balloon.open()
}
const searchInputMap = document.querySelector('.main__contacts-input')
const searchResultMap = document.querySelector('.main__contacts-search')
let getCoordinates
const searchButtonMap = document.querySelector('.main__contacts-button')
searchButtonMap.addEventListener('click', e => {
    e.preventDefault()
    if (searchInputMap.value !== '') {
        map.geoObjects.removeAll()
        map.setCenter(getCoordinates)
        const newPlacemark = new ymaps.Placemark(getCoordinates, {
            balloonContentHeader: `
            <h3 class="map-header-title">SitDownPls на Солянке</h3>
            <p class="map-header-description">м. Китай-город, ул. Солянка, д.24</p>
            <a href="tel:84958854547" class="map-header-tel">
                <svg width="18" height="18" viewBox="0 0 18 18">
                    <use xlink:href="img/sprite.svg#phone-svg" id="phone-svg" fill="#FF862F"></use>
                </svg>
                +7 (495) 885-45-47
            </a>
        `,
        balloonContentBody: `
            <p class="map-body-text"><span class="span-text">Часы работы:</span> с 10:00 до 21:00</p>
        `,
        balloonContentFooter: `
            <p class="map-footer-text"><span class="span-text">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
        `
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/favicon.svg',
            iconImageSize: [30, 45],
            iconImageOffset: [-3, -42]
        })
        map.geoObjects.add(newPlacemark)
        newPlacemark.balloon.open()
    }
})
const searchItemsMap = document.querySelectorAll('.main__contacts-search-item')
searchItemsMap.forEach(el => {
    el.addEventListener('click', () => {
        searchInputMap.value = el.children[0].textContent.trim()
        searchResultMap.classList.remove('search-active')
        getCoordinates = el.dataset.coord.split(',')
    })
})
searchInputMap.addEventListener('input', () => {
    (searchInputMap.value.length === 0) ? searchResultMap.classList.remove('search-active') : searchResultMap.classList.add('search-active')
})
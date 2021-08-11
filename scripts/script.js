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
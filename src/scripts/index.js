const mainBannerSwiper = new Swiper(('.main__front-banner-swiper'), {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
})
const mainSpecialSwiper = new Swiper(('.main__special-swiper'), {
    spaceBetween: 32,
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.special-arrow-right',
        prevEl: '.special-arrow-left',
    },
    breakpoints: {
        1366: {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
        },
        1025: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
})
const mainUsefulSwiper = new Swiper(('.main__useful-swiper'), {
    spaceBetween: 32,
    navigation: {
        nextEl: '.useful-arrow-right',
        prevEl: '.useful-arrow-left',
    },
    breakpoints: {
        1366: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1
        }
    }
})

const selectorEl = document.getElementsByName('tel')
const im = new Inputmask('+7 (999)-999-99-99')
im.mask(selectorEl)
new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,
            function: () => {
                const phone = selectorEl[0].inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
        mail: {
            required: true,
            email: true
        },
        checkbox: {
            required: true
        }
    },
    focusWrongField: true,
    messages: {
        name: {
            required: 'Поле "Имя" обязательно для заполнения',
            minLength: 'Поле "Имя" введено некорректно, минимум 2 знака',
            maxLength: 'Поле "Имя" введено некорректно, максимум 20 знаков'
        },
        tel: {
            required: 'Поле "Телефон" обязательно для заполнения',
            function: 'Заполните поле "Телефон" до конца'
        },
        email: {
            required: 'Поле "Email" обязательно для заполнения',
            email: 'Недопустимый формат'
        },
        checkbox: {
            required: 'Необходимо принять пользовательское соглашение'
        },
    },
    submitHandler: function(form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                   console.log('success')
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
    }
})

const highrateButton = document.querySelector('.main__highrate-btn')
highrateButton.addEventListener('click', e => {
    e.preventDefault()
    highrateButton.style.display = 'none'
    const highrateHiddenItems = document.querySelectorAll('.main-product-item:nth-child(n + 9)')
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
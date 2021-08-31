const selectorEl = document.getElementsByName('tel');
const im = new Inputmask('+7 (999)-999-99-99');
im.mask(selectorEl);
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
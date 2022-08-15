
// Hàm validator - đối tượng validator
// var errorElement = inputElement.parentElement.querySelector('.form-message')
function Validator(options) {
    // console.log(options.form);
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((rule) => {
            console.log(rule);
            var inputElement = formElement.querySelector(rule.selector)
            // console.log(inputElement.parentElement);
            // console.log(inputElement)
            if (inputElement) {
                // xử lý TH blur ra khỏi input
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);
                    // console.log(errorElement)
                    validate(inputElement, rule);
                    // xử lý mỗi khi người dùng nhập vào input
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
                }
            }
        })
    }
    // console.log(options.rules)
    // hàm thực hiện validate 
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message')
        // console.log(errorElement)
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
}
// định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'

        }
    }
}
// js email regex
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}


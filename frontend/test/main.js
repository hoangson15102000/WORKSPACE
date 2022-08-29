


function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            // console.log(rule.selector)
            // console.log(inputElement)
            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);
                    validate(inputElement, rule);
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector('.form-message');
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
                }
            }
        })
    }
}

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

// js email regex
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'x Tên đăng nhập không được bỏ trống';
        }
    }
}
Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
            return regex.test(value) ? undefined : 'x Tên đăng nhập không được bỏ trống';
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : 'x Mật khẩu không được bỏ trống';
        }
    }
}


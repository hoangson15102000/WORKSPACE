
// đối tượng validator / constructor function
function Validator(options) {
    var formElement = document.querySelector(options.form);

    //Vì các hàm isrequired và isEmail return lại các object 
    // nên options.rules sẽ là 1 array gồm 2 phần tử là 2 object
    // Array ??? array method?
    if (formElement) {
        options.rules.forEach(function (rule) {
            // hàm thục hiện validate 
            function validate(inputElement, rule) {// get value
                // test func rule.test()
                var errorMessage = rule.test(inputElement.value);

                if (errorMessage) {
                    errorElement.innerText = errorMessage;
                    inputElement.parentElement.classList.add('invalid')
                } else {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }


            }
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            if (inputElement) {

                // xử lý Th blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)

                }
                // xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');

                }
            }

        });

    }
}
// định nghĩa các rules : vì rule là phương thức method nên phải là hàm
// Nguyên tắc khi có lỗi --> trả ra message lỗi 
// Khi hợp lệ thì k trả ra gì cả undefined

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'

        }
    }

}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? undefined : 'Vui lòng nhập email'

        }
    }
}
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {

            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`

        }
    }
}
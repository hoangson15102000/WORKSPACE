var users = [
    { name: 'Tom', gender: 'male' },
    { name: 'Maria', gender: 'female' },
    { name: 'Jason', gender: 'male' },
    { name: 'Sora', gender: 'female' },
    { name: 'Teo', gender: 'male' }

]
const listElement = document.getElementById('userList');
const selectElement = document.getElementById('genderFilter');
console.log(selectElement.value)

const htmls = document.querySelector('.list-group');
function render(listUsers) {
    const result = listUsers.map(function (item) {
        return `<li class="list-group-item">${item.name}</li></br>`
    }
    );
    htmls.innerHTML = result.join('')
}
render(users)
selectElement.onchange = function () {
    const valueSelect = selectElement.value;
    const filteredValue = users.filter(function (item) {
        return item.gender === valueSelect;

    });
    if (valueSelect == 'null') {
        render(users)
    }
    else if (valueSelect == 'male') {
        render(filteredValue)
    }
    else if (valueSelect == 'female') {
        render(filteredValue)
    }
}


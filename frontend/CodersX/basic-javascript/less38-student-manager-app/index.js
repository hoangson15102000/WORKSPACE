var readlineSync = require('readline-sync');
var fs = require('fs')
function showMenu() {
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save & Exit');
    var option = readlineSync.question('> ');
    switch (option) {
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showStudents();
            saveAndExit();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('I think something is wrong');
            showMenu();
            break;
    }

}
var students = [];
function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);


}
function showStudents() {
    for (var student of students) {
        console.log(student.name, student.age)
    }

}
function showCreateStudent() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var data = {
        name: name,
        age: age
    };
    students.push(data);

}
function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf-8' })
}

function main() {
    loadData();
    showMenu();
    // var option = readlineSync.question('> ');
    // switch (option) {
    //     case '1':
    //         showStudents();
    //         showMenu();
    //         break;
    //     case '2':
    //         showCreateStudent();
    //         showStudents();
    //         saveAndExit();
    //         showMenu();
    //         break;
    //     case '3':
    //         saveAndExit();
    //         break;
    //     default:
    //         console.log('I think something is wrong');
    //         showMenu();
    //         break;
    // }
}
main();
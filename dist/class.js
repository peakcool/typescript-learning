"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function welcome_2(person) {
    return 'Hello, ' + person.firstName + " " + person.lastName;
}
var user_2 = new Student("Jane", "M", 'User');
console.log(welcome_2(user_2));

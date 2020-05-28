"use strict";
function welcome(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var account = { firstName: 'Jane', lastName: 'User' };
console.log(welcome(account));

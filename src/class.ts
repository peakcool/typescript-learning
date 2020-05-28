class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' +lastName;
    }
}

interface Person_2 {
    firstName: string;
    lastName: string;
}

function welcome_2(person: Person_2) {
    return 'Hello, ' + person.firstName + " " + person.lastName; 
}

let user_2 = new Student("Jane", "M", 'User');
console.log(welcome_2(user_2));
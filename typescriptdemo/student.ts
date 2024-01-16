interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}


class Student implements Person{
    fullName: string;
    constructor(public firstName: string,
                public middleInitial: string,
                public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let st1: Student = new Student("Dave", "E", "Grohl");
console.log(st1.fullName);
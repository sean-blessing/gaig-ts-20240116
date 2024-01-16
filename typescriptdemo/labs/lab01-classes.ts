// Fields
// class Person1 {
//     first: string = "";
//     last: string = "";
// }

// let person = new Person1();
// person.first = "Kanye";
// person.last = "West";

// console.log(person.first + " " + person.last);

// Constructors
class Person1 {
    first: string = "";
    last: string = "";

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

// let person = new Person1("Kanye", "West");
// console.log(person.first + " " + person.last);

// // Parameter properties
// class Person1 {

//     constructor(public first: string, public last: string) {
//     }
// }

// let person = new Person1("Kanye", "West");
// console.log(person.first + " " + person.last);

// // Methods
// class Person1 {

//     constructor(public first: string, public last: string) {
//     }

//     getFullName() {
//         return this.first + ' ' + this.last;
//     }
// }

// let person = new Person1("Kanye", "West");
// console.log(person.getFullName());

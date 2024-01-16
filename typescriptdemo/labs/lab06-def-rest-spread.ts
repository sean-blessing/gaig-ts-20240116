// default
function add(x: number, y: number = 2) {
    return x + y;
}

console.log(add(1,1));
console.log(add(1));

// rest
function print(...theArguments: any[]) {
    for (let argument of theArguments) {
        console.log(argument);
    }
}

print("a", "b", "c", "d");

// spread
let person1 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
}

console.log("person1: ", person1);

let copyOfPerson1 = { ... person1, gender: "Male" }
console.log("copyOfPerson1: ", copyOfPerson1);
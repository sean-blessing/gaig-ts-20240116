"use strict";
let person2 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
};
let { first, last } = person2;
console.log(first);
console.log(last);
// p. 25
let { first: str1, last: str2 } = person2;
console.log(str1);
console.log(str2);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab04_my_module_1 = require("./lab04-my-module");
console.log((0, lab04_my_module_1.myFunction)());
console.log(lab04_my_module_1.myObject.name);
console.log(lab04_my_module_1.myObject.myMethod());
console.log(lab04_my_module_1.myPrimitive);
let myClass = new lab04_my_module_1.MyClass();
console.log(myClass.myClassMethod());

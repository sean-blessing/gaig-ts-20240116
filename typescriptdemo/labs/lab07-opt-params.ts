function greeter1(name?: string) {
    if (!name) name = "... you";
    return `Hi ${name}`;
}

console.log(greeter1());
console.log(greeter1("Josh"));
function buildName(first: string, last: string, middle?: string) {
    if (middle)
        return `${first} ${middle} ${last}`;
    else
        return `${first} ${last}`;
}

console.log(buildName("Dave", "Grohl"));
console.log(buildName("Dave", "Grohl", "Eric"));

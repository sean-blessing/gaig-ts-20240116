"use strict";
function buildName(first, last, middle) {
    if (middle)
        return `${first} ${middle} ${last}`;
    else
        return `${first} ${last}`;
}
console.log(buildName("Dave", "Grohl"));
console.log(buildName("Dave", "Grohl", "Eric"));

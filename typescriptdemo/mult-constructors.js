"use strict";
class PersonM {
    constructor(first, last) {
        this.greet = () => `$Hello ${`${!this.firstName ? "" : this.firstName} ${!this.lastName ? "" : this.lastName}`.trim()}`;
        this.firstName = first !== null && first !== void 0 ? first : "";
        this.lastName = last !== null && last !== void 0 ? last : "";
    }
}

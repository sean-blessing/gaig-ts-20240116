class PersonM {
    public firstName: string;
    public lastName: string;
    constructor();
    constructor(first: string);
    constructor(first: string, last: string);
    constructor(first?: string, last?: string) {
        this.firstName = first ?? "";
        this.lastName = last ?? "";
    }
    greet = () => `$Hello ${`${!this.firstName ? "" : this.firstName} ${!this.lastName ? "" : this.lastName}`.trim()}`;
}
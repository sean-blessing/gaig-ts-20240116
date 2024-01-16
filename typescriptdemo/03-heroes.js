"use strict";
var organization = {
    name: "Avengers",
    heroes: ["Hulk", "Iron Man", "Captain America"],
    printHeroes: function () {
        let self = this;
        this.heroes.forEach(function (hero) {
            console.log(hero + " is a member of the " + self.name);
        });
    },
    printHeroesArrow: function () {
        this.heroes.forEach(h => console.log(h + " is a member of the " + this.name));
    }
};
organization.printHeroes();
organization.printHeroesArrow();

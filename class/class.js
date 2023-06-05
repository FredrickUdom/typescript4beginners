var Human = /** @class */ (function () {
    function Human(n, p, i) {
        this.name = n;
        this.pet = p;
        this.isCool = i;
    }
    Human.prototype.greeting = function () {
        return "my name is: ".concat(this.name, ", and I have ").concat(this.pet, " pets, am ").concat(this.isCool);
    };
    return Human;
}());
var humanBeing1 = new Human('fred', 3, true);
console.log(humanBeing1.greeting());

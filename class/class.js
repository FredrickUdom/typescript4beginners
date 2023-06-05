var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(n, p, i) {
        this.name = n;
        this.figure = p;
        this.isCool = i;
    }
    Human.prototype.greeting = function () {
        return "my name is: ".concat(this.name, ", and I have ").concat(this.figure, " pets, am ").concat(this.isCool);
    };
    return Human;
}());
var humanBeing1 = new Human('fred', 3, true);
// console.log(humanBeing1.name)
// console.log(humanBeing1.greeting())
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(myName, age, attitude) {
        return _super.call(this, myName, age, attitude) || this;
    }
    People.prototype.myDetails = function () {
        return ("my names are: ".concat(this.name, ", I am ").concat(this.figure, " years old, my attitude:").concat(this.isCool));
    };
    return People;
}(Human));
var details = new People('Dickson', 5, true);
console.log(details.myDetails());

class Human{
    name: string;
    figure : number;
    isCool: boolean;

    constructor(n: string, p:number, i:boolean){
        this.name = n;
        this.figure = p;
        this.isCool = i;

    }
     greeting(){
        return `my name is: ${this.name}, and I have ${this.figure} pets, am ${this.isCool}`
     }
}
let humanBeing1 = new Human('fred', 3, true);
// console.log(humanBeing1.name)
// console.log(humanBeing1.greeting())

class People extends Human{
    constructor(myName: string, age: number, attitude: boolean){
        super(myName, age, attitude)
    }
    myDetails(){
        return(`my names are: ${this.name}, I am ${this.figure} years old, my attitude:${this.isCool}`)
    }
}
let details = new People('Dickson', 5, true);
console.log(details.myDetails())
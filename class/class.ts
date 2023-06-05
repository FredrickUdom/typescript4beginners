class Human{
    name: string;
    pet : number;
    isCool: boolean;

    constructor(n: string, p:number, i:boolean){
        this.name = n;
        this.pet = p;
        this.isCool = i;

    }
     greeting(){
        return `my name is: ${this.name}, and I have ${this.pet} pets, am ${this.isCool}`
     }
}
let humanBeing1 = new Human('fred', 3, true);
console.log(humanBeing1.greeting())
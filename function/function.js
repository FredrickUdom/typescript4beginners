// const calPIE = (muti:number) =>{
//     return(`this is the answer`+ ' ' + Math.PI + muti)
// }
// console.log(calPIE(10));
// function addNumbers(a:number, b:number, c?:number | string) {
//     return(a + b  + " " + c)
// }
// console.log(addNumbers(2,3, 'johnDoe'));
// const addNumbers = (a:number, b:number, c?:number | string) =>{
//     return a + b +  " " + c;
// }
// console.log(addNumbers(5,5, 'it is done'));
// function sayHello(name:string){
//     return `hello ${name} how are you today?`
// }
// console.log(sayHello('fred'));
// const sayHello= (name:number)=>{
//     return `hello ${name} how are you today, hope you are fine?`
// }
// console.log(sayHello(6))
// function add(num1, num2?):number{
//     if(num2){
//         return num1 * num2
//     }else{
//         return num1
//     }
//     return num1 + num2
// }
// console.log(add(5));
// console.log(add(7, 7))
function fullName(person) {
    console.log("".concat(person.firstName, ", ").concat(person.lastName));
}
var p = {
    firstName: 'fred',
    lastName: 'udom'
};
console.log(fullName(p));

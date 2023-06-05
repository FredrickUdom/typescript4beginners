var person1 = {
    name: 'fred',
    phone: 87,
    human: true,
};
console.log(person1);
var fillForm = function (fill) {
    console.log("my name is: ".concat(fill.firstName, ", I am a ").concat(fill.career, " bro, you can reach me with this email: ").concat(fill.email));
};
var formDetails = {
    firstName: 'fredrick',
    career: 'Tech',
    email: 'fred@gmail.com'
};
fillForm(formDetails);

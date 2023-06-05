interface person{
    name: string;
    phone: number;
    human: boolean;
}

const person1:person ={
    name: 'fred',
    phone: 87,
    human: true,
}
console.log(person1)

interface form{
    firstName: string;
    career: string;
    email: string;
}
const fillForm = (fill:form)=>{
    console.log(`my name is: ${fill.firstName}, I am a ${fill.career} bro, you can reach me with this email: ${fill.email}`)
}
let formDetails ={
    firstName: 'fredrick',
    career: 'Tech',
    email: 'fred@gmail.com'
}

fillForm(formDetails)
type stringOrNumber = string | number;

type personObject={
    name: string;
    id: stringOrNumber;
}

let personal: personObject={
    name: 'johnDoe',
    id: 2
}

const sayHello = (personss:personObject)=>{
    return `hey ${personss.name} with id: ${personss.id}`
}
console.log(sayHello(personal))
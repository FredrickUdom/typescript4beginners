var personal = {
    name: 'johnDoe',
    id: 2
};
var sayHello = function (personss) {
    return "hey ".concat(personss.name, " with id: ").concat(personss.id);
};
console.log(sayHello(personal));

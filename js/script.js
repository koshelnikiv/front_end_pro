console.log('Типи даних в JavaScript');
console.log('');
console.log('Примітивні');
console.log('');
let myNumber = 10.5;
console.log('Тип ' + typeof (myNumber) + ': ' + myNumber);
const bigNumber = 1234567890123456789012345678901234567890n;
console.log('Тип ' + typeof (bigNumber) + ': ' + bigNumber);
const myStr = 'lorem ipsum';
console.log('Тип ' + typeof (myStr) + ': ' + myStr + '"');
const myFalse = false;
const myTrue = true;
console.log('Тип ' + typeof (myFalse) + ': ' + myFalse + ' / ' + myTrue);
myNumber = null;
console.log('Тип ' + typeof (myNumber) + ': ' + myNumber);
let myUnknown;
console.log('Тип ' + typeof (myNumber) + ': ' + myUnknown);
const uniqueID = Symbol('My Id');
console.log('Тип ' + typeof (uniqueID) + ': ' + uniqueID.toString() + ' (опис: ' + uniqueID.description + ')');
console.log('');
console.log("Об'єктні");
console.log('');
let person = {
    name: 'Alice',
    age: 30,
    sayHello: function () {
        console.log('Hello, ' + this.name);
    }
};

console.log('Тип ' + typeof (person) + ': ');
console.log(person);

let person2 = ['Alice', 30];
console.log('Тип ' + typeof (person2) + ': ');
console.log(person2);

console.log('Тип ' + typeof (person.sayHello) + ': ');
console.log(person.sayHello);

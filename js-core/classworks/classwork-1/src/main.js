// --- ПЕРЕМЕННЫЕ --- //


var myName = 'Andrei';
let myNameLet = 'Lepekhov';
const myNameConst = 'Evgenievich';

console.log('Привет', myNameLet);

var myName = 'Andrei';
const mySuperHero = 'Father';

console.log('My name: ', myName,',', 'My super hero:', mySuperHero);


// --- ТИПЫ ДАННЫХ --- //

// --- Boolen

const primitiveTypeBoolenTrue = true;
const primitiveTypeBoolenFalse = false;

console.log(primitiveTypeBoolenTrue , primitiveTypeBoolenFalse);

// --- Number

const  primitiveTypeNumber = 10;
const  primitiveTypeNumberFloat = 10.5;
const  primitiveTypeInfinity = Infinity;
const  primitiveTypeNumberNotANumber = NaN;

console.log(primitiveTypeNumber, primitiveTypeNumberFloat, primitiveTypeInfinity, primitiveTypeNumberNotANumber);

// --- String

const primitiveTypeString = 'Привет моя строка';
const primitiveTypeString_v2 = "Привет моя строка";
const primitiveTypeString_v3 = `Привет моя строка`;

console.log(primitiveTypeString, primitiveTypeString_v2, primitiveTypeString_v3);

// --- Null

const primitiveTypeNull = null;

console.log(primitiveTypeNull);

// --- Undefined

const primitiveTypeUndefined = undefined;

console.log(primitiveTypeUndefined);


// --- Object

const user = {
    firstname: 'Andrei',
    lastname: 'Lepekhov',
    friend: {
        name: 'Den',
        dog: 'Archi'
    },
    
    friends: [
        'Den',
        'Dmitriy',
        'Anton'
    ],
    
};
console.log(user);


const friend = {
    name: 'Den',
    dog: 'Archi'
};
console.log(friend);

// --- Array Массив это структура данных, а не тип данных

const myArray = [
    'черный карандаш',
    'красный карандаш',
    primitiveTypeString,
 ];

console.log(myArray);


// --- Symbol

const sym = Symbol('aaa');

console.log(sym);


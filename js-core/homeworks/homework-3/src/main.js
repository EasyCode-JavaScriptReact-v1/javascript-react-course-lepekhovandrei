/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/


// Задать аргумент функции val
// Создать новый обьект
// Задать свойство name со значением val в обьекте 
// Вернуть обьект внутри функции

function returnObject(val) {
  const object = {
    name: val,
  }
  return object;
}

var someObject = returnObject('Andrei');

console.log(someObject);



/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/


//
function toUpperCase(obj) {
  const newObj = {
    name: obj.name.toUpperCase()
  }
  
  return newObj;
}
const objectWithName = { name: 'privet kak dela' };
console.log(toUpperCase(objectWithName));


/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
  // без "естественных" способов добавления
 

}

addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);

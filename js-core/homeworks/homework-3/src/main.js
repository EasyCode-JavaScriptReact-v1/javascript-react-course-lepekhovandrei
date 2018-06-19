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







//-------------------------------------------------------
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

  arrParam.push(newElem); 

  //console.log(arrParam.length); = 3
  arrParam[arrParam.length] = newElem; // Вроде так тогда получается

}

addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);

//-------------------------------------------------------


let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
  // без "естественных" способов добавления

  let arrayNew  = arrParam.length;

  arrParam[arrayNew] = newElem; 
}

addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);



/*
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/

function simpleObjectGenerator(one, two, three) {
  const obj = {
    arg1: one,
    arg2: two,
    arg3: three
  };

  return obj;
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));



/*
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
*/



var myName = { name: 'Andrei' };

function addNameToUser(newKey, newValue, userName) {
  let newObj = {};

  newObj[newKey] = newValue;

  if (userName.name) {
    newObj.name = userName
  }
  return newObj;
}

console.log(addNameToUser('family', '%Lepekhov%', myName));
console.log(addNameToUser('name', 'privet Pasha', {}));

console.log(myName);

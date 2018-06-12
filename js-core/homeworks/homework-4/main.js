/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

function checkTypeFunction (typeArg) {
    if(typeof typeArg == 'object' || typeof typeArg == 'number') {
        return true;
    }

    if(typeof typeArg  == 'function' ) {
        return false;
    }

    if(typeof typeArg == 'string' && typeArg.length != 10 ){
        return 'Длина вашей строки: ' + typeArg.length;
    }

    if(typeof typeArg == 'string' && typeArg.length == 10 ){
        return 'You Win'
    }
   
}

console.log(checkTypeFunction({}));
console.log(checkTypeFunction(function(){}));
console.log(checkTypeFunction('01234567890'));
console.log(checkTypeFunction('0123456789'));



/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {

    const myArray = [];

     for(i = a; i <= b; i ++) {
       
        myArray.push(i)
        
    }

    console.log(myArray);
}



numbersBetween(3, 5);
// 3, 4, 5

// numbersBetween(10, 12);
// 10, 11, 12


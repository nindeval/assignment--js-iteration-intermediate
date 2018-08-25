/**
 * sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/

function sumPositives(arrNum){
  let sumaHippies = 0

  for(var i = 0; i < arrNum.length; i++){
    // console.log(arrNum[i])
    if(arrNum[i] > 0){
      // console.log(arrNum[i])
      sumaHippies += arrNum[i]
    }
  }
  return sumaHippies
}

const ejercicio01 = sumPositives([-2, 3, -1, 4])
console.log(ejercicio01)


console.group('JS Iterations Week');
  console.log('%cFunction: sumPositives', 'background-color: green; color: white')
  console.groupCollapsed('Should return 12 in the next [3, -1, 4, 5, -3, -4] series');
    console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
  console.groupEnd();

  console.groupCollapsed('Should return 170 in the next [-11, 30,-20, 40, 100] series');
    console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
  console.groupEnd();

  console.groupCollapsed('Should return 205 in the next [4 ,-10,-30, -4, 201] series');
    console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
  console.groupEnd();
console.groupEnd();

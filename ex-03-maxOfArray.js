/**
 * maxOfArray()
 *
 * Write a function maxOfArray() that takes an array of
 * numbers as an argument and finds the highest number.
 *
**/

function maxOfArray(arrNumbers){
  var highestNumber = 0
  // console.log(arrNumbers[0])

  for(var i = 0; i < (arrNumbers.length); i++){
    if(highestNumber > arrNumbers[i]){
    } else {
      highestNumber = arrNumbers[i]
    }
  }
  return highestNumber
}
const ejercicio03 = maxOfArray ([1, 8, 23, 6, 9])
console.log(ejercicio03)

console.group('JS Iterations Week');
  console.log('%cFunction: maxOfArray', 'background-color: green; color: white')
  console.groupCollapsed('Should return 21 for the next [2, 7, 3, 4, 21, 0] series');
    console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
  console.groupEnd();

  console.groupCollapsed('Should return 100 for the next [100, 9, 8, 7, 6, 10] series');
    console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
  console.groupEnd();

  console.groupCollapsed('Should return 201 for the next [84, 32, 11, 31, 12, 201] series');
    console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
  console.groupEnd();
console.groupEnd();

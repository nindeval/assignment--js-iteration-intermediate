/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 function sumDigits(num){
   let sumTotal = 0
   let numInd = num.toString()
   let sumSimpleNumber = numInd.split('')

   // console.log(sumTotal);
   // console.log(Num);

   for(var i = 0; i < sumSimpleNumber.length; i++){
    // console.log(sumSimpleNumber[i]);
     sumTotal += parseInt(sumSimpleNumber[i])
   }

   return sumTotal
 }

 const ejercicio05 = sumDigits('911')
 console.log(ejercicio05);

console.group('JS Iterations Week');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
  console.groupCollapsed('Should return 6 from "123"');
    console.assert(sumDigits(123) === 6)
  console.groupEnd();

  console.groupCollapsed('Should return 11 from "911"');
    console.assert(sumDigits(911) === 11)
  console.groupEnd();

  console.groupCollapsed('Should return 12 from "8040"');
    console.assert(sumDigits(8040) === 12)
  console.groupEnd();

  console.groupCollapsed('Should return 15 from "173220"');
    console.assert(sumDigits(173220) === 15)
  console.groupEnd();
console.groupEnd();

/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
**/

function findLongestWord(strOfWords){
  var longestWordStr = ''
  // console.log(strOfWords)
  var strNosimb = ''
  var separateWords = strOfWords.split(' ')

  for(var i = 0; i < strOfWords.length; i++){
    var noSpecialCharacter = strOfWords.replace("'", "")
    // console.log(noSpecialCharacter)
      strNosimb += noSpecialCharacter
  }

  for(var i = 0; i < noSpecialCharacter.length; i++){
  // console.log(noSpecialCharacter[i])
    var largoChar = noSpecialCharacter[i]
    console.log(largoChar)

    // if(longestWordStr.length > largoChar.length){
    //   // longestWordStr = largoChar
    //
    // }

  }
  return longestWordStr
}

const ejercicio04 = findLongestWord("Alexander shouldn't talk anymore")
// console.log(ejercicio04)

console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();

/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

function hasDoubleLetters(strDoubleLet){
  var tieneRepetidas = false
  // console.log(strDoubleLet.split(''))
  var arrLetrasSeparadas = strDoubleLet.split('')
  // console.log(arrLetrasSeparadas[0])

  for(var i = 0; i < (arrLetrasSeparadas.length - 1); i++){
    // console.log(arrLetrasSeparadas[i])
    // console.log(arrLetrasSeparadas[i+1])
    // console.log(arrLetrasSeparadas.length)

    if(arrLetrasSeparadas[i].toLowerCase() === arrLetrasSeparadas[i + 1].toLowerCase()){
      tieneRepetidas = true
    }
  }
  return tieneRepetidas
}

const ejercicio02 = hasDoubleLetters('shutter')
console.log(ejercicio02)


console.group('JS Iterations Week');
  console.log('Function: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('stutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();

'use strict';

let even_to_letter = collection => {
  let code_array = collection.filter(ele => ele % 2 === 0);
  return code_array.map(code => String.fromCharCode(97 + code - 1));
}

module.exports = even_to_letter;

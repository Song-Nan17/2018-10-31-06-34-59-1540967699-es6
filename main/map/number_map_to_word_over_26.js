'use strict';
let number_map_to_word_over_26 = collection => {
  return collection.map(number => {
    if (number > 26) {
      let first_code = Math.floor((number - 1) / 26) - 1 + 97;
      let second_code = (number - 1) % 26 + 97;
      return String.fromCharCode(first_code, second_code);
    } else {
      return String.fromCharCode(97 + number - 1);
    }
  });
}

module.exports = number_map_to_word_over_26;

'use strict';
let number_map_to_word = collection => {
  return collection.map(number => String.fromCharCode(97 + number - 1));
}

module.exports = number_map_to_word;

'use strict';

function average_to_letter(collection) {
  let sum = collection.reduce((acc, current) =>acc + current);
  let average = Math.ceil(sum/collection.length);
  return String.fromCharCode(97 + average - 1);
}

module.exports = average_to_letter;


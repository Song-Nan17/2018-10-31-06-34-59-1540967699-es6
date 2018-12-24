'use strict';
let single_element = collection => {
  let num_even_arr = collection.filter((element, index) => (index + 1) % 2 === 0);
  return num_even_arr.filter((element, index, array) => {
    return array.indexOf(element) === index && array.lastIndexOf(element) === index;
  });
}

module.exports = single_element;

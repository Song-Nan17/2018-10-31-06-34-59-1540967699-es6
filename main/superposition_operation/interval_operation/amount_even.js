'use strict';

let amount_even = collection => {
  let even_arr = collection.filter(ele => ele % 2 === 0);
  return even_arr.reduce((acc, current) => acc + current);
}

module.exports = amount_even;

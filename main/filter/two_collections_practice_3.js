'use strict';

let choose_divisible_integer = (collection_a, collection_b) => {
  return collection_a.filter(ele_a => collection_b.some(ele_b => ele_a % ele_b === 0));
}

module.exports = choose_divisible_integer;

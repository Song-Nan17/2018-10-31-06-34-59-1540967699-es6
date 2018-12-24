'use strict';

let hybrid_operation_to_uneven = collection => {
  let odd_arr = collection.filter(ele => ele % 2 !== 0);
  let triple_add_five = odd_arr.map(num => num * 3 + 5);
  return triple_add_five.reduce((acc, current) => acc + current);
}

module.exports = hybrid_operation_to_uneven;


'use strict';

let hybrid_operation_to_uneven = collection => {
  let odd_arr = collection.filter(ele => ele % 2 !== 0);
  return odd_arr.map(ele => ele * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;


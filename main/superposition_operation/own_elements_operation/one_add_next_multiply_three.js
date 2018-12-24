'use strict';

let one_add_next_multiply_three=collection=> {
  let computed_arr = collection.map((current, index, array)=> {
    if (index < array.length - 1) {
      let next = array[index + 1];
      return (current + next) * 3;
    }
    return current;
  });
  computed_arr.pop();
  return computed_arr;
}

module.exports = one_add_next_multiply_three;

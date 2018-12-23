'use strict';

let get_letter_interval = (number_a, number_b) => {
  let code_array = get_integer_interval(number_a, number_b)
  return code_array.map(code => String.fromCharCode(97 + code - 1));
}

let get_integer_interval = (number_a, number_b) => {
  let left_interval = Math.min(number_a, number_b);
  let right_interval = Math.max(number_a, number_b);
  let integer_array = get_interval_arr(left_interval, right_interval);
  if (number_a > number_b) {
    integer_array.reverse();
  }
  return integer_array;
}

let get_interval_arr = (left_interval, right_interval) => {
  let integer_array = [];
  for (left_interval; left_interval <= right_interval; left_interval++) {
    integer_array.push(left_interval);
  }
  return integer_array;
}

module.exports = get_letter_interval;

'use strict';

let spilt_to_zero = (number, interval) => {
  let split_arr = [number];
  do {
    number = (number * 10 - interval * 10) / 10;
    split_arr.push(number);
  } while (number > 0);
  return split_arr;
}

module.exports = spilt_to_zero;

'use strict';

let average_uneven = collection => {
  let odd_arr = collection.filter(ele => ele % 2 !== 0);
  let sum = odd_arr.reduce((acc, current) => acc + current);
  return sum / odd_arr.length;
}

module.exports = average_uneven;

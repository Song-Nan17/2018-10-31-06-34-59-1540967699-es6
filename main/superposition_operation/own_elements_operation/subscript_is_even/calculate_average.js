'use strict';

let calculate_average = collection => {
  let even_sub_arr = collection.filter((element, index) => (index + 1) % 2 === 0);
  let sum = even_sub_arr.reduce((acc, current) => acc + current);
  return sum / even_sub_arr.length;
}

module.exports = calculate_average;

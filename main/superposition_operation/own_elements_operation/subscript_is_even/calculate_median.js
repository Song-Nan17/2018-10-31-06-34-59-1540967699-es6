'use strict';

let calculate_median = collection => {
  let even_sub_arr = collection.filter((element, index) => (index + 1) % 2 === 0);
  return compute_median(even_sub_arr);
}

let compute_median = collection => {
  let median_left_sub = Math.floor((collection.length - 1) / 2);
  let median_right_sub = Math.ceil((collection.length - 1) / 2);
  let double_median = collection[median_left_sub] + collection[median_right_sub];
  return double_median / 2;
}

module.exports = calculate_median;

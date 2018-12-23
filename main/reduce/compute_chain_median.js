'use strict';

let compute_chain_median = collection => {
  let chainArr = collection.split("->");
  let chainNumArr = chainArr.map(Number);
  return compute_median(chainNumArr);
}

let compute_median = collection => {
  let rank_asc_arr = collection.sort((a, b) => a - b);
  let median_left_sub = Math.floor((rank_asc_arr.length - 1) / 2);
  let median_right_sub = Math.ceil((rank_asc_arr.length - 1) / 2);
  let double_median = rank_asc_arr[median_left_sub] + rank_asc_arr[median_right_sub];
  return double_median / 2;
}

module.exports = compute_chain_median;

'use strict';

let even_asc_odd_desc = collection => {
  let even_arr = collection.filter(ele => ele % 2 === 0);
  let odd_arr = collection.filter(ele => ele % 2 !== 0);
  even_arr = even_arr.sort((a, b) => a - b);
  odd_arr = odd_arr.sort((a, b) => b - a);
  return even_arr.concat(odd_arr);
}

module.exports = even_asc_odd_desc;

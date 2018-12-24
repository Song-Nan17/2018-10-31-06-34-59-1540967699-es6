'use strict';

let even_group_calculate_average = collection => {
  let even_sub_arr = collection.filter((element, index) => (index + 1) % 2 === 0);
  let even_arr = even_sub_arr.filter(ele => ele % 2 === 0);
  if (even_arr.length) {
    let group_arr = even_arr.reduce(group_array, [[], [], []]);
    let average_array = group_arr.map(compute_group_average);
    return average_array.reduce((acc, current) => acc.concat(current), []);
  }
  return [0];
}

let group_array = (acc, ele) => {
  let ele_length = ele.toString().length;
  switch (ele_length) {
    case 1:
      acc[0].push(ele);
      break;
    case 2:
      acc[1].push(ele);
      break;
    case 3:
      acc[2].push(ele);
      break;
  }
  return acc;
}

let compute_group_average = arr => {
  if (arr.length !== 0) {
    let sum = arr.reduce((acc, current) => acc + current)
    return sum / arr.length;
  }
  return arr;
}

module.exports = even_group_calculate_average;

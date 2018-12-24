'use strict';

function median_to_letter(collection) {
  let code = Math.ceil(calculate_median(collection));
  return code_to_letter(code);
}

let calculate_median=collection=> {
  let median_left_sub = Math.floor((collection.length - 1) / 2);
  let median_right_sub = Math.ceil((collection.length - 1) / 2);
  let double_median = collection[median_left_sub] + collection[median_right_sub];
  return double_median / 2;
}

let code_to_letter=code=> {
  if (code > 26) {
    let first_code = Math.floor((code - 1) / 26) - 1 + 97;
    let second_code = (code - 1) % 26 + 97;
    return String.fromCharCode(first_code, second_code);
  } else {
    return String.fromCharCode(97 + code - 1);
  }
}

module.exports = median_to_letter;

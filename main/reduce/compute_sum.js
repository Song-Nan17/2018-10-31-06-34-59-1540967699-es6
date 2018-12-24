'use strict';

let calculate_elements_sum = collection => {
  return collection.reduce((accumulator, current) => accumulator + current);
}

module.exports = calculate_elements_sum;


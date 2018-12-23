'use strict';

let compute_average = collection => {
  let sum = collection.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / collection.length;
}

module.exports = compute_average;


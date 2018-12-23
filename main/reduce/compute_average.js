'use strict';

let compute_average = collection => {
  let sum = collection.reduce((accumulator, current) => accumulator + current);
  return sum / collection.length;
}

module.exports = compute_average;


'use strict';

let double_to_one = collection => {
  let one_dimension = collection.reduce((accumulator, current) => accumulator.concat(current), []);
  return one_dimension.filter((element, index, array) => array.indexOf(element) === index);
}

module.exports = double_to_one;

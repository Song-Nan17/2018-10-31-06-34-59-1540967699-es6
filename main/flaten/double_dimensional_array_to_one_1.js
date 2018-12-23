'use strict';

let double_to_one=collection=> {
  return collection.reduce((accumulator, current)=>accumulator.concat(current), []);
}

module.exports = double_to_one;

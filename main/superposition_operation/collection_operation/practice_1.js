'use strict';

let hybrid_operation = collection => {
  let triple_add_two = collection.map(num => num * 3 + 2);
  return triple_add_two.reduce((acc, current) => acc + current);
}

module.exports = hybrid_operation;


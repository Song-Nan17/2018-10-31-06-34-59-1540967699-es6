'use strict';

let find_last_even = collection => {
  return collection.reverse().find(num => num % 2 == 0);
}

module.exports = find_last_even;

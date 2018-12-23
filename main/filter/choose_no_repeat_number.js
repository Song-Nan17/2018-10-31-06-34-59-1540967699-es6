'use strict';

let choose_no_repeat_number = collection => {
  return collection.filter((element, index, array) => array.indexOf(element) === index);
}

module.exports = choose_no_repeat_number;

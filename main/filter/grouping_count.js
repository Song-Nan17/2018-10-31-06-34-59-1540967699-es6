'use strict';

let grouping_count = collection => {
  return collection.reduce((all_elements, ele) => {
    if (ele in all_elements) {
      all_elements[ele]++;
    }
    else {
      all_elements[ele] = 1;
    }
    return all_elements;
  }, {});
}

module.exports = grouping_count;

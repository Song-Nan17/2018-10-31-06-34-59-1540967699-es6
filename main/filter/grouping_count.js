'use strict';

let grouping_count = collection => {
  return collection.reduce((allElements, ele) => {
    if (ele in allElements) {
      allElements[ele]++;
    }
    else {
      allElements[ele] = 1;
    }
    return allElements;
  }, {});
}

module.exports = grouping_count;

'use strict';
let rank_by_two_large_one_small = collection => {
  let asc_arr = collection.sort((a, b) => a - b);
  return asc_arr.reduce((acc, current, index, array) => {
    let slice_arr = [];
    if (index % 3 === 0) {
      slice_arr = array.slice(index, index + 3);
    }
    if (slice_arr.length === 3) {
      slice_arr.shift();
      slice_arr.push(current);
    }
    return acc.concat(slice_arr);
  }, []);
}

module.exports = rank_by_two_large_one_small;

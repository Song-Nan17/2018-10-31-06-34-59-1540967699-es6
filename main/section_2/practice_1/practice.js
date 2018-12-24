let count_same_elements = collection => {
  let counts_arr = grouping_count(collection);
  return counts_arr.map(ele => {
    return { key: ele[0], count: ele[1] };
  });
}

let grouping_count = collection => {
  let obj = collection.reduce((acc, ele) => {
    if (ele in acc) {
      acc[ele]++;
    }
    else {
      acc[ele] = 1;
    }
    return acc;
  }, {});
  return Object.entries(obj);
}

module.exports = count_same_elements;

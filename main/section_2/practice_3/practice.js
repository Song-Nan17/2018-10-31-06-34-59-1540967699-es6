let count_same_elements = collection => {
  let countsArr = grouping_count(collection);
  return countsArr.map(ele => {
    return { name: ele[0], summary: ele[1] };
  });
}

let grouping_count = collection => {
  let obj = collection.reduce((acc, current) => {
    let ele = current[0];
    let ele_value = to_get_num_in_str(current);
    if (ele in acc) {
      acc[ele] += ele_value;
    } else {
      acc[ele] = ele_value;
    }
    return acc;
  }, {});
  return Object.entries(obj);
}

let to_get_num_in_str = str => {
  let str_value = Number(str.replace(/[^0-9]/ig, ""));
  if (str_value === 0) {
    return 1;
  }
  return str_value;
}

module.exports = count_same_elements;

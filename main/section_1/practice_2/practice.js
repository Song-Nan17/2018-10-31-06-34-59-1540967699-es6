let collect_same_elements = (collection_a, collection_b) => {
  let one_dimension = collection_b.reduce((acc, current) => acc.concat(current), []);
  return collection_a.filter(ele => one_dimension.includes(ele));
}

module.exports = collect_same_elements;

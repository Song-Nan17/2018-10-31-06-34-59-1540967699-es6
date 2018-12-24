let collect_same_elements = (collection_a, object_b) => {
  let collection_b = object_b.value;
  return collection_a.filter(ele => collection_b.includes(ele));
}

module.exports = collect_same_elements;
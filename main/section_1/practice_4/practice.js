let collect_same_elements = (collection_a, object_b) => {
  let key_arr = collection_a.reduce((acc, obj) => {
    acc.push(obj.key);
    return acc;
  }, []);
  let collection = object_b.value;
  return key_arr.filter(ele => collection.includes(ele));
}

module.exports = collect_same_elements;

let create_updated_collection = (collection_a, object_b) => {
  return collection_a.map(obj => {
    if (object_b.value.includes(obj.key)) {
      obj.count -= Math.floor(obj.count / 3);
    }
    return obj;
  });
}

module.exports = create_updated_collection;

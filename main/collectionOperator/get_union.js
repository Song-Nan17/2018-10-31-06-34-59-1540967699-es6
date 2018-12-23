'use strict';

let get_union = (collection_a, collection_b) => {
  let complementary = collection_b.filter(ele => !collection_a.includes(ele));
  return collection_a.concat(complementary);
}

module.exports = get_union;


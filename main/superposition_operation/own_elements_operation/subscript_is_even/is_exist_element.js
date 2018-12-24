'use strict';
let is_exist_element = (collection, element) => {
  let even_sub_arr = collection.filter((element, index) => index % 2 === 0);
  return even_sub_arr.includes(element);
}


module.exports = is_exist_element;

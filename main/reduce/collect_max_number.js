'use strict';

let collect_max_number = collection => collection.reduce((max, current) => Math.max(max, current));

module.exports = collect_max_number;

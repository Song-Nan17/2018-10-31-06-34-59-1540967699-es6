'use strict';

let collect_min_number = collection => collection.reduce((min, current) => Math.min(min, current));

module.exports = collect_min_number;


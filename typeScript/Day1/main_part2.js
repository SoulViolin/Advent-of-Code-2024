"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf-8');
var _a = input
    .trim()
    .split('\n')
    .reduce(function (acc, line) {
    var _a = line.split(/\s+/).map(Number), left = _a[0], right = _a[1];
    acc[0].push(left);
    acc[1].push(right);
    return acc;
}, [[], []]), leftList = _a[0], rightList = _a[1];
var rightCountMap = rightList.reduce(function (countMap, number) {
    countMap[number] = (countMap[number] || 0) + 1;
    return countMap;
}, {});
var similarityScore = leftList.reduce(function (total, number) {
    var countInRightList = rightCountMap[number] || 0;
    return total + number * countInRightList;
}, 0);
console.log('Similarity Score:', similarityScore);

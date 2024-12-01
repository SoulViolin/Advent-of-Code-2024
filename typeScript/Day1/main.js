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

leftList.sort(function (a, b) { return a - b; });
rightList.sort(function (a, b) { return a - b; });

var totalDistance = leftList.reduce(function (sum, leftValue, index) {
    var rightValue = rightList[index];
    return sum + Math.abs(leftValue - rightValue);
}, 0);
console.log('Total Distance:', totalDistance);

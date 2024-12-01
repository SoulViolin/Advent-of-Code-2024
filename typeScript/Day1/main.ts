import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const [leftList, rightList] = input
  .trim()
  .split('\n')
  .reduce<[number[], number[]]>((acc, line) => {
    const [left, right] = line.split(/\s+/).map(Number);
    acc[0].push(left);
    acc[1].push(right);
    return acc;
  }, [[], []]);

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

const totalDistance = leftList.reduce((sum, leftValue, index) => {
  const rightValue = rightList[index];
  return sum + Math.abs(leftValue - rightValue);
}, 0);

console.log('Total Distance:', totalDistance);

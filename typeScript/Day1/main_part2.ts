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

const rightCountMap = rightList.reduce<Record<number, number>>((countMap, number) => {
  countMap[number] = (countMap[number] || 0) + 1;
  return countMap;
}, {});

const similarityScore = leftList.reduce((total, number) => {
  const countInRightList = rightCountMap[number] || 0;
  return total + number * countInRightList;
}, 0);

console.log('Similarity Score:', similarityScore);

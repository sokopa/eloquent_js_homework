// Range and Sum

function range(start, end, step = start < end ? 1 : -1) {
  console.log(start, end, step);
  let result = [];
  if (start > end) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(elements) {
  let result = 0;
  elements.forEach((element) => {
    result += element;
  });
  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// → 55

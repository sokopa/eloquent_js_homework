function arrayToList(array) {
  let ret = null;
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    ret = prepend(element, ret);
  }
  return ret;
}

function listToArray(list) {
  let ret = [];
  let head = list;
  while (head != null) {
    ret.push(head.value);
    head = head.rest;
  }
  return ret;
}

function nth(list, n) {
  if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

function prepend(value, list) {
  return { value, rest: list };
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

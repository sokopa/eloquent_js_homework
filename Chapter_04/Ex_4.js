// Deep comparison

function deepEqual(left, right) {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  for (let key in left) {
    if (typeof left[key] == 'object' && left[key] != null) {
      if (deepEqual(left[key], right[key]) == false) return false;
    } else {
      if (left[key] !== right[key]) return false;
    }
  }
  return true;
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true

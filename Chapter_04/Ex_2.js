// Reverse Array

// For this exercise, write two functions, reverseArray and reverseArrayInPlace.

// The first, reverseArray, takes an array as argument and produces
// a new array that has the same elements in the inverse order.

function reverseArray(source) {
  let destination = [];
  for (let element of source) {
    destination.unshift(element);
  }
  return destination;
}

// The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.

// Neither may use the standard reverse method.

function reverseArrayInPlace(source) {
  for (let i = 0; i <= Math.floor(source.length / 2); i++) {
    let temp = source[i];
    source[i] = source[source.length - 1 - i];
    source[source.length - 1 - i] = temp;
  }
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

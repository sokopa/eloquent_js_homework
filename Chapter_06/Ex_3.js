// Iterable groups

// Make the Group class from the previous exercise iterable.
// Refer to the section about the iterator interface earlier in the
// chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members,
// don’t just return the iterator created by calling the Symbol.iterator method on the array.
// That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

// Your code here (and the code from the previous exercise)

class Group {
  constructor() {
    this.storage = [];
  }

  has(element) {
    return this.storage.includes(element);
  }

  add(element) {
    if (!this.has(element)) {
      this.storage.push(element);
    }
  }

  delete(element) {
    let existing = this.storage.indexOf(element);
    if (existing != -1) {
      this.storage.splice(existing, 1);
    }
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index === this.group.storage.length) return { done: true };
    let value = { value: this.group.storage[this.index], done: false };
    this.index++;
    return value;
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c

const { readFile, stat, readdir } = require('fs').promises;
const { resolve, sep } = require('path');

let expression = process.argv[2];
let targets = process.argv.slice(3);
console.log(expression);
console.log(targets);

let regexp = new RegExp(expression);

targets.forEach(async (target) => {
  let path = resolve(target);
  search(regexp, path);
});

async function search(expression, path) {
  let stats = await stat(path);
  if (stats.isDirectory()) {
    let innerFiles = await readdir(path);
    innerFiles.forEach(async (f) => await search(expression, path + sep + f));
  } else {
    await checkFile(expression, path);
  }
}

async function checkFile(expression, path) {
  let content = await readFile(path, 'utf-8');
  var match = expression.exec(content);
  if (match) console.log(path);
}

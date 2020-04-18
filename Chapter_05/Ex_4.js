require('./05_higher_order/code/load')(
  'code/scripts.js',
  'code/chapter/05_higher_order.js',
  'code/intro.js'
);

function dominantDirection(text) {
  var directions = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  let prominentDirection = directions.reduce((max, curr) =>
    max.count > curr.count ? max : curr
  );
  return prominentDirection.name;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl

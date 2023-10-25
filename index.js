var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = { cats, destructivelyAppendCat };


var cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array, leaving the original 'cats' array unchanged
  var newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  // Create a new array, leaving the original 'cats' array unchanged
  var newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  // Create a new array, leaving the original 'cats' array unchanged
  var newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  // Create a new array, leaving the original 'cats' array unchanged
  var newCats = cats.slice(1);
  return newCats;
}

module.exports = {
  cats,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

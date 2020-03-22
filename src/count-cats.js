module.exports = function countCats(array) {
  // throw 'Not implemented';
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "^^") count++;
    }
  }
  return count;
};

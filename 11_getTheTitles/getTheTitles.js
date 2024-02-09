const getTheTitles = function (library) {
  let result = new Array();
  for (key in library) {
    let book = library[key];
    result.push(book.title);
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;

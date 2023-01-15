//10. Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.

Array.prototype.cReduce = function (callback, initialValue) {
  
  let accumulator = initialValue != undefined ? initialValue : 0;

  if (this.length === 0) {
    if (initialValue === undefined) return "TypeError";
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

console.log(
  [1, 2, 3, 4, 5, 6].cReduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 10)
);

console.log(
  [1, 2, 3, 4, 5, 6].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 10)
);

Array.prototype.cJoin = function (arg) {
  let string = "";
  const separator = arg != undefined ? arg : ",";

  for (let i = 0; i < this.length; i++) {
    const word = this[i].toString();

    string += word + separator;
  }

  return string.slice(0, this.length * 2 - 1);
};

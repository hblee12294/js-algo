const data = [1, 2, 3, 4, 5, 6, 7, 8];

function findEven(arr) {
  return arr.filter((num) => num % 2 === 0).map((num) => num * 2);
}

console.log(findEven(data));

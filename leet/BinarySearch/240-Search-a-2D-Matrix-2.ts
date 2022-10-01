export function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const columns = matrix[0].length;

  let row = rows - 1;
  let column = 0;

  while (row >= 0 && column <= columns - 1) {
    const value = matrix[row][column];

    if (value === target) {
      return true;
    } else if (value > target) {
      row--;
    } else {
      column++;
    }
  }

  return false;
}

const t1 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(searchMatrix(t1, 5));

const t2 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(searchMatrix(t2, 20));
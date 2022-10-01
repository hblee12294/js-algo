export function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const columns = matrix[0].length;

  let start = 0;
  let end = rows * columns - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    const midValue = matrix[Math.floor(mid / columns)][mid % columns];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (matrix[Math.floor(start / columns)][start % columns] === target) {
    return true;
  } else if (matrix[Math.floor(end / columns)][end % columns] === target) {
    return true;
  }

  return false;
}

// const t1 = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// console.log(searchMatrix(t1, 3));

// const t2 = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// console.log(searchMatrix(t2, 13));

const t3 = [[0, 1]];
console.log(searchMatrix(t3, 1));

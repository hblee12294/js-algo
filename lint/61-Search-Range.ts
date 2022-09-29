export function searchRange(a: number[], target: number): number[] {
  if (a.length === 0) return [-1, -1];

  let start = 0;
  let end = a.length - 1;
  let left = -1;
  let right = -1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (a[mid] === target) {
      end = mid;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (a[start] === target) {
    left = start;
  } else if (a[end] === target) {
    left = end;
  } else {
    return [-1, -1];
  }

  start = 0;
  end = a.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (a[mid] === target) {
      start = mid;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (a[end] === target) {
    right = end;
  } else {
    right = start;
  }

  return [left, right];
}

const t1: number[] = [];
console.log(searchRange(t1, 9));

const t2: number[] = [5, 7, 7, 8, 8, 10];
console.log(searchRange(t2, 8));

/**
 * @param L: Given n pieces of wood with length L[i]
 * @param k: An integer
 * @return: The maximum length of the small pieces
 */
function woodCut(L, k) {
  // write your code here
  let start = 0
  let end = Math.max(...L)

  while (start + 1 < end) {
    const mid = ~~((end - start) / 2) + start
    const cuts = getCutsNum(L, mid)

    if (cuts === k) {
      return mid
    }

    // The relationship between cuts & length is inverse ratio
    if (cuts > k) {
      start = mid
    } else {
      end = mid
    }
  }

  if (getCutsNum(L, start) === k) return start

  if (getCutsNum(L, end) === k) return end

  return 0
}

function getCutsNum(L, k) {
  return L.reduce((prev, cur) => ~~(cur / k) + prev, 0)
}

arr = [232, 124, 456]
target = 7

console.log(woodCut(arr, target))

// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

/* Untilities */

function validateRange(range) {
  const validatedRange = [];

  for (const item of range) {
    if (Number.isInteger(item)) {
      validatedRange.push(item);
    } else {
      throw new Error(
        `Range items must be integers! (Received: ${typeof item} ${item})`
      );
    }
  }

  return validatedRange.sort((a, b) => a - b);
}

/* RangeList */

class RangeList {
  ranges = [];

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    let targetRange = validateRange(range);

    const resultRanges = [];
    const [start, end] = targetRange;

    // The loop process is to transform the targetRange and
    // keep replacing or inserting before the current range until
    // the targetRange is consumed or reach the end of the range list
    for (const currentRange of this.ranges) {
      // Push the currentRange directly into the result if targetRange is consumed
      if (!targetRange) {
        resultRanges.push(currentRange);

        continue;
      }

      const [currentStart, currentEnd] = currentRange;

      if (end < currentStart) {
        // targetRange on the left completely
        resultRanges.push(targetRange);
        resultRanges.push(currentRange);

        targetRange = null;
      } else if (end <= currentEnd) {
        if (start <= currentStart) {
          // targetRange spans the front of the currentRange
          resultRanges.push([start, currentEnd]);
        } else {
          // targetRange is swallowed by the currentRange
          resultRanges.push(currentRange);
        }

        targetRange = null;
      } else {
        if (start <= currentStart) {
          // targetRange covers the currentRange, do nothing
        } else if (start <= currentEnd) {
          // targetRange spans the end of the currentRange
          targetRange = [currentStart, end];
        } else {
          // targetRange on the right completely
          resultRanges.push(currentRange);
        }
      }
    }

    // Push the unconsumed targetRange to the end
    if (targetRange !== null) {
      resultRanges.push(targetRange);
    }

    this.ranges = resultRanges;
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    let targetRange = validateRange(range);

    const resultRanges = [];
    const [start, end] = targetRange;

    // The loop process is to keep cutting or inserting before the current range until
    // the targetRange is consumed or reach the end of the range list, targetRange doesn't
    // have to be transformed
    for (const currentRange of this.ranges) {
      // Push the currentRange directly into the result if the targetRange is consumed
      if (!targetRange) {
        resultRanges.push(currentRange);

        continue;
      }

      const [currentStart, currentEnd] = currentRange;

      if (end < currentStart) {
        // targetRange on the left completely
        targetRange = null;
      } else if (end <= currentEnd) {
        if (start <= currentStart) {
          // targetRange spans the front of the currentRange
          resultRanges.push([end, currentEnd]);
        } else {
          // targetRange cuts the currentRange into halfs
          resultRanges.push([currentStart, start]);
          resultRanges.push([end, currentEnd]);
        }

        targetRange = null;
      } else {
        if (start <= currentStart) {
          // targetRange covers the currentRange, do nothing
        } else if (start <= currentEnd) {
          // targetRange spans the end of the currentRange
          resultRanges.push([currentStart, start]);
        } else {
          // targetRange on the right completely
          resultRanges.push(currentRange);
        }
      }
    }

    this.ranges = resultRanges;
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    const result = this.ranges.reduce(
      (prevResult, [start, end]) =>
        `${prevResult}${prevResult ? " " : ""}[${start}, ${end})`,
      ""
    );

    console.log(result);
  }
}

// Example run

const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)

function validateRange(range) {
  const validatedRange = [];

  if (range.length !== 2) {
    throw new Error("Range must be a pair.");
  }

  for (const item of range) {
    if (Number.isInteger(item)) {
      validatedRange.push(item);
    } else {
      throw new Error(
        `Range items must be integers. (Received: ${typeof item} ${item})`
      );
    }
  }

  return validatedRange.sort((a, b) => a - b);
}

export { validateRange };

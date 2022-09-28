function isValid(s: string): boolean {
  const leftChars = ["{", "(", "["];
  const rightChars = ["}", ")", "]"];

  if (s.length === 0) return false;

  if (s.length % 2 === 1) return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    if (leftChars.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      const leftIndex = leftChars.findIndex((char) => char === top);
      const rightIndex = rightChars.findIndex((char) => char === s[i]);
      if (leftIndex !== rightIndex) return false;
    }
  }

  return !stack.length;
}

console.log(isValid("{}[]"));

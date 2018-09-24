console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( true || 'no matter what' ); // (true is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

console.log('-----------')

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
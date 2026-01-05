/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return Number(a) + Number(b);
}

module.exports = add;

// Example:
// console.log(add(2, 3)); // 5


/**
 * Divide two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) throw new TypeError('Arguments must be numbers');
  if (y === 0) throw new Error('Division by zero');
  return x / y;
}

module.exports.divide = divide;

// Example:
// console.log(divide(6, 2)); // 3
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
 * Multiply two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return Number(a) * Number(b);
}

module.exports = { add: module.exports, multiply };

// Example:
// console.log(multiply(5, 3)); // 15

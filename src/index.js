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
 * Return the remainder of a divided by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function mod(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!isFinite(y) || y === 0) return NaN;
  return x % y;
}

module.exports.mod = mod;

// Example:
// console.log(mod(7, 3)); // 1
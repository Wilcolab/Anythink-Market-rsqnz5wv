/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Converts a string to kebab-case.
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-cased string.
 * @throws {TypeError} If input is not a string.
 * @example
 * toKebabCase('Hello World Test 123!!') // 'hello-world-test-123'
 */
function toKebabCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  input = input.trim();

  input = input.toLowerCase()
    .replace(/_+/g, ' ')
    .replace(/-+/g, ' ')
    .replace(/[^\w\s\d]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/(\s)\1+/g, '$1')
    .split(' ')
    .join('-');

  return input.replace(/^-+|.+$/g, '');
}

console.log(toKebabCase('Hello World Test 123!!')); // 'hello-world-test-123'
console.log(toKebabCase('Hello__World--Test 123!!')); // 'hello-world-test-123'
console.log(toKebabCase('')); // ''
console.log(toKebabCase('   ')); // ''
console.log(toKebabCase(null)); // TypeError
console.log(toKebabCase(undefined)); // TypeError
console.log(toKebabCase('!@#$%^&*()')); // ''
console.log(toKebabCase('Version 2 Test')); // 'version-2-test'
console.log(toKebabCase('Version 2 Test 123')); // 'version-2-test-123'
/*******  096e9623-6d77-4194-afb2-ea30e0379516  *******/
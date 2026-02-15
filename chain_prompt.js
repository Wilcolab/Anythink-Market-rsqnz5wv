/**
 * Converts text into kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} - The kebab-case version of the input
 * @throws {TypeError} - If input is not a valid string
 */
function toKebabCase(input) {
    // Step 1: Validate input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new TypeError('Input must be a non-null string');
    }

    // Trim whitespace from both ends
    let cleaned = input.trim();

    // Step 2: Normalize and clean input.
    // Convert to lowercase
    cleaned = cleaned.toLowerCase();

    // Replace underscores, hyphens, and multiple spaces with a single space
    cleaned = cleaned.replace(/[_\-\s]+/g, ' ');

    // Remove special characters except spaces and numbers
    cleaned = cleaned.replace(/[^\w\s]/g, '');

    // Remove leading and trailing spaces
    cleaned = cleaned.trim();

    // Step 3: Convert to kebab-case
    // Split by spaces and filter out empty strings, then join with hyphens
    const kebabCase = cleaned
        .split(/\s+/)
        .filter(word => word.length > 0)
        .join('-');

    return kebabCase;
}

// Step 4: Test cases
console.log('Test 1:', toKebabCase(' Hello__World--Test 123!! '));
// Expected: "hello-world-test-123"

console.log('Test 2:', toKebabCase('CamelCaseString'));
// Expected: "camelcasestring"

console.log('Test 3:', toKebabCase('hello-world'));
// Expected: "hello-world"

console.log('Test 4:', toKebabCase('hello_world'));
// Expected: "hello-world"

console.log('Test 5:', toKebabCase('Version 2 Test'));
// Expected: "version-2-test"

console.log('Test 6:', toKebabCase('   spaces   everywhere   '));
// Expected: "spaces-everywhere"

console.log('Test 7:', toKebabCase('@#$Hello$#@World'));
// Expected: "hello-world"

console.log('Test 8:', toKebabCase('single'));
// Expected: "single"
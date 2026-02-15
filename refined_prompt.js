


/**
 * Utility module for string case conversion functions
 * @module stringCaseConverters
 * @description Provides functions to convert strings between different naming conventions
 * (dot.case and camelCase) with comprehensive input validation and error handling.
 */

/**
 * Converts a string to dot.case format (lowercase words separated by dots).
 * @function toDotCase
 * @param {*} input - Any input type (string, number, null, undefined, etc)
 * @returns {string} dot.case formatted string with all words lowercase and separated by dots
 * @throws {TypeError} When input is not a string. Error message includes the actual type received.
 * @description Processes input by:
 * - Trimming leading/trailing whitespace
 * - Normalizing multiple consecutive separators (hyphens, underscores, dots, spaces, slashes)
 * - Removing special characters while preserving alphanumeric characters
 * - Converting all words to lowercase and joining with dots
 * @example
 * // Returns 'hello.world.test'
 * toDotCase(' hello---WORLD__test 123 ');
 * @example
 * // Returns 'hello.world'
 * toDotCase('hello-world');
 * @example
 * // Throws TypeError
 * toDotCase(123);
 */

/**
 * Converts a string to camelCase format (first word lowercase, subsequent words capitalized)
 * @function toCamelCase
 * @param {*} input - Any input type (string, number, null, undefined, etc.)
 * @returns {string} camelCase formatted string with first word lowercase and subsequent words
 * capitalized, joined without separators
 * @throws {TypeError} When input is not a string. Error message includes the actual type received.
 * @description Processes input by:
 * - Trimming leading/trailing whitespace
 * - Normalizing multiple consecutive separators (hyphens, underscores, dots, spaces, slashes)
 * - Removing special characters while preserving alphanumeric characters
 * - Keeping first word lowercase and capitalizing first letter of subsequent words
 * - Joining all words without separators
 * @example
 * // Returns 'helloWorldTest123'
 * toCamelCase(' hello---WORLD__test 123 ');
 * @example
 * // Returns 'helloWorld'
 * toCamelCase('hello-world');
 * @example
 * // Returns ''
 * toCamelCase('   ');
 * @example
 * // Throws TypeError
 * toCamelCase(null);
 */

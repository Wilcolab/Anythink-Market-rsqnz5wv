
/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 * @example
 * toCamelCase('hello world') // 'helloWorld'
 */
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}   
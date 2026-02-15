function addNumbers(a, b) {
    return a + b;
}
/**
 * Converts a string to camelCase format.
 * Words are separated by spaces, hyphens, or underscores.
 * The first word is lowercase, and subsequent words have their first letter capitalized.
 * 
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("hello-world-foo") // returns "helloWorldFoo"
 * toCamelCase("hello_world_bar") // returns "helloWorldBar"
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\s-](.)/g, (_, char) => char.toUpperCase());
}
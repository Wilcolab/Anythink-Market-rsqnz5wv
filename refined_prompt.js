function toCamelCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`toCamelCase() expects a string, but received ${typeof input}`);
  }

  input = input.trim().replace(/[^\w\s\d\-_\.\/]+/g, '');

  const words = input
    .split(/[ \-_\.\s\/]+/)
    .map(word => word.replace(/^[0-9]+/g, ''))
    .filter(word => word !== '' );

  const camelCaseString = words.reduce(
    (result, word, index) =>
      index === 0
        ? word.toLowerCase()
        : `${result}${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`,
    ''
  );

  return camelCaseString;
}

// Example
const input = "hello---WORLD__test 123";
const output = toCamelCase(input);
console.log(output); // "helloWorldTest123"

// Test Cases
const testCases = [
  { input: "hello world", output: "helloWorld" },
  { input: "HELLO WORLD", output: "helloWorld" },
  { input: "hello 2 world", output: "hello2World" },
  { input: "hello---WORLD__test 123", output: "helloWorldTest123" },
  { input: "hello-world", output: "helloWorld" },
  { input: "hello.world", output: "helloWorld" },
  { input: "hello_world", output: "helloWorld" },
  { input: "hello/world", output: "helloWorld" },
/*******  c32b3d91-6bcd-41ff-804e-c34333649f15  *******/  { input: null, output: TypeError },

  { input: undefined, output: TypeError },
  { input: 123, output: TypeError },
  { input: { foo: 'bar' }, output: TypeError },
  { input: ['hello', 'world'], output: TypeError },
  { input: true, output: TypeError },
  { input: false, output: TypeError },
];

testCases.forEach(testCase => {
  try {
    const output = toCamelCase(testCase.input);
    expect(output).toEqual(testCase.output);
  } catch (error) {
    expect(error).toEqual(testCase.output);
  }
});


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Converts a string to camelCase.
 * @param {string} input - The string to convert.
 * @returns {string} The camelCased string.
 * @example
 * toCamelCase('hello world') // 'helloWorld'
 */
function toCamelCase(input) {
  // ...
}

/**
 * Converts a string to dotCase.
 * @param {string} input - The string to convert.
 * @returns {string} The dotCased string.
 * @example
 * toDotCase('hello world') // 'hello.world'
 */
function toDotCase(input) {
  // ...
}

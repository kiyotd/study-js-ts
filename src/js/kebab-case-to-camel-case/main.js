/**
 * One letter of a-z following a hyphen
 * @type {RegExp}
 */
const regex = /-([a-z])/g;

/**
 * Convert to uppercase
 * @param match {string}
 * @param offset {string}
 * @returns {string}
 */
function strToUpperCase(match, offset) {
  return offset.toUpperCase();
}

/**
 * Convert from kebab case to camel case
 * @example
 * const result = kebabCaseToCamelCase("set-user-name");
 * console.log(result); // "setUserName"
 * @param string
 * @returns {string}
 */
function kebabCaseToCamelCase(string) {
  return string.replace(regex, strToUpperCase);
}

//
// const result = kebabCaseToCamelCase("set-user-name");
// console.log(result);

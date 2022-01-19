import { normalizeString, resultMessage } from './helpers.js';

/**
 * 
 * @param {string} input 
 * @returns boolean - true if string is palindrome
 */
function testPalindrome(input) {
  let value = normalizeString(input);
  let isPalindrome = true;

  const len = value.length;

  // iterate over half of the string
  for (let i = 0; i < len / 2; i++) {
    // compare character from the left-half side of string with the opposite right-half side character
    // if it's different return false
    if (value[i] !== value[len - 1 - i]) isPalindrome = false;
  }

  return isPalindrome;
}

/**
 * 
 * @param {string} input 
 * @returns boolean - true if string is palindrome
 */
const testPalindromeLazySolution = (input) => (
  normalizeString(input).split('').reverse().join('') === normalizeString(input)
)

export {
  resultMessage,
  testPalindrome,
  testPalindromeLazySolution,
}
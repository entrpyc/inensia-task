import { normalizeString } from './helpers.js';

/**
 * @param {string} input 
 * @returns boolean - true if the string is а palindrome, or null if input is not valid
 */
export function testPalindrome(input) {
  let value = normalizeString(input);
  if (!value) return null

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
 * @param {string} input 
 * @returns boolean - true if the string is а palindrome
 */
export const testPalindromeLazySolution = (input) => (
  normalizeString(input).split('').reverse().join('') === normalizeString(input)
)
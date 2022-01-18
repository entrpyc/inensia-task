import { normalizeString, resultMessage } from './helpers.js';

export function testPalindrome(input, result) {
  let value = normalizeString(input);
  let isPalindrome = true;

  const len = value.length;

  // iterate over half of the string
  for (let i = 0; i < len / 2; i++) {
    // compare character from the left-half side of string with the opposite right-half side character
    // if it's different return false
    if (value[i] !== value[len - 1 - i]) isPalindrome = false;
  }


  result.className = isPalindrome ? 'green' : 'red'
  result.innerText = resultMessage[isPalindrome]
  return isPalindrome;
}

export function testPalindromeLazySolution(input, result) {
  let value = normalizeString(input);
  const mirrorString = value.split('').reverse().join('');

  let isPalindrome = mirrorString == value;

  result.className = isPalindrome ? 'green' : 'red'
  result.innerText = resultMessage[isPalindrome]

  return isPalindrome;
}
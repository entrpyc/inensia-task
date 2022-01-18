const form = document.getElementsByTagName('form')[0]
const input = document.getElementById('input-test-palindrome')
const result = document.getElementById('title-result')

form.addEventListener('submit', testPalindrome)

function testPalindrome(e) {
  e.preventDefault();

  let value = normalizeString(input.value);
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

const normalizeString = value => value.normalize().toLowerCase().trim()

const resultMessage = {
  true: 'The input is a palindrome',
  false: 'The input is NOT a palindrome',
}
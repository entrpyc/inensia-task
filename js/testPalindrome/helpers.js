/**
 * @param {string} value 
 * @returns normalized string
 */
export const normalizeString = value => value.normalize().toLowerCase().trim()

export const resultMessage = {
  true: 'The input is a palindrome',
  false: 'The input is NOT a palindrome',
  null: 'The input is not valid',
}
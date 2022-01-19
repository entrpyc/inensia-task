/**
 * Sorts an array of numbers with quicksort algorithm. The function is not pure - It will mutate the array for optimized space complexity.
 * @param {Number[]} arr Array to be sorted
 * @param {int} [startIndex] optional
 * @param {int} [endIndex] optional
 */
export function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex >= endIndex) return
  if (endIndex - startIndex >= 9) permuteMedianOfThree(arr)

  let midIndex = partitionResolver(arr, startIndex, endIndex);

  quickSort(arr, startIndex, midIndex - 1);
  quickSort(arr, midIndex + 1, endIndex);
}

function partitionResolver(arr, startIndex, endIndex) {
  const pivotVal = arr[endIndex]
  let index = startIndex

  for (let i = index; i < endIndex; i++) {
    if (arr[i] < pivotVal) swap(arr, index++, i)
  }

  swap(arr, index, endIndex)
  return index;
}


// Using destructuring to swap two values in array
const swap = (arr, x, y) => [arr[y], arr[x]] = [arr[x], arr[y]]


// Permutation of the array - picks start, middle, end index and it sorts them
function permuteMedianOfThree(arr) {
  const permute = [0, Math.ceil((arr.length - 1) / 2), arr.length - 1]

  if (arr[permute[0]] > arr[permute[1]]) swap(arr, permute[0], permute[1])
  if (arr[permute[2]] < arr[permute[0]]) swap(arr, permute[2], permute[0])
  if (arr[permute[1]] > arr[permute[2]]) swap(arr, permute[1], permute[2])

  swap(arr, permute[1], permute[2])
}


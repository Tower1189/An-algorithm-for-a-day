const array = [7, 2, 5, 4, 1, 8, 12, 6, 8]

function quickSort(array) {
  if (array.length <= 1) {
    return array
  }
  let middle = array[0], left = [], right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] > middle) {
      right.push(array[i])
    } else {
      left.push(array[i])
    }
  }
  return quickSort(left).concat(middle, quickSort(right))
}

console.log(quickSort(array))
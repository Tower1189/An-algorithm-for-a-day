const array = [7, 2, 5, 4, 1, 8, 12, 6, 8, 11]

function merge(left, right) {
  let i = 0, j = 0
  let result = []
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i += 1
    } else {
      result.push(right[j])
      j += 1
    }
  }
  result = result.concat(left.slice(i, left.length))
  result = result.concat(right.slice(j, right.length))
  return result
}

function merge_sort(array) {
  if (array.length <= 1) {
    return array
  }
  const num = Math.floor(array.length / 2)
  const left = merge_sort(array.slice(0, num))
  const right = merge_sort(array.slice(num, array.length))
  return merge(left, right)
}

const result = merge_sort(array)
console.log(result)
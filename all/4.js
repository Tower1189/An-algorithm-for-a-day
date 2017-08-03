const array = [7, 2, 5, 4, 1, 8, 12, 1, 4]

for (let i = 0; i < array.length - 1; i++) {
  let min = i
  // find the minimum
  for (let j = i + 1; j < array.length; j++) {
    if (array[min] > array[j]) {
      min = j
    }
  }
  // Swap places
  [array[i], array[min]] = [array[min], array[i]]
  console.log(array)
}

console.log(array)
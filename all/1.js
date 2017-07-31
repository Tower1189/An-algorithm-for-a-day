// bubble sort 
// const array = [7, 2, 5, 4, 1, 8, 12, 1, 4]
const array = [1, 2, 3, 4, 5]

// method one
for (let j = 0; j < array.length - 1; j++) {
  // record
  const arrayCopy = Object.assign([], array) 
  for (let i = 0; i < array.length - j - 1; i++) {
    if (array[i] > array[i + 1]) {
      // Meet the conditions，swap places
      [array[i + 1], array[i]] = [array[i], array[i + 1]]
    }
    console.log(array)
  }
  const flag = array.every((value, index) => {
    return arrayCopy[index] === value
  })
  // All are equal,break loop
  if (flag) break
  console.log(j + 1 + ' \n')
}

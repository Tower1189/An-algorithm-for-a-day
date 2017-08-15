const array = [7, 2, 5, 4, 1, 8, 12, 6, 8]
console.log(array);
function shellSort(array) {
  const length = array.length
  let increment = Math.floor(length / 2)
  while (increment > 0) {
    for (let i = increment; i < length; i++) {
      for (let j = i - increment; j >= 0 && array[i] < array[j]; j -= increment) {
        [array[j + increment], array[j]] = [array[j], array[j + increment]]
      }
    }
    increment = Math.floor(increment / 2)
    console.log(increment, array);
  }
  return array
}
const result = shellSort(array)
console.log(result);
const array = [7, 2, 5, 4, 1, 8, 12, 1, 4]

for (let  i = 1; i < array.length; i++) {
  for (let j = i + 1; j > 0; j--) {
    if (array[j] < array[j - 1]) {
      [array[j - 1],array[j]] = [array[j],array[j - 1]]
    }
  }
}
  
console.log(array)
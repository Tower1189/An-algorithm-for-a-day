const array = [1, 5, 3, 1, 4, 2, 5, 3]
let newArray = []
// method one 
for (let i = 0; i < array.length; i++) {
  let flag = false
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      flag = true
      break
    }
  }
  if (!flag) {
    newArray.push(array[i])
  }
}

// method two
// let object = {}
// for (let i = 0; i < array.length; i++) {
//    if(object[array[i]] === undefined) {
//      object[array[i]] = i
//      newArray.push(array[i])
//    }
// }

// const newArray = new Set();
// array.forEach((value) => {
//   newArray.add(value)
// })


console.log(newArray)
const object = {
  item1: 'a',
  item2: {item21: 1},
  item3: {
    item31: 'b',
    item32: [4, 5, 6]
  }
}
const array = [1, 2, 3, [1, 2, [1]]]
function deepCopy(obj) {
  const newObject = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj[key] instanceof Array || obj[key] instanceof Object) {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }
  return newObject
}
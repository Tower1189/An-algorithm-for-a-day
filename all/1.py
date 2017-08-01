array = [7, 2, 5, 4, 1, 8, 12, 1, 4]

for j in range(len(array) - 1):
  arrayCopy = array.copy()
  for i in range(len(array) - j - 1):
    if array[i] > array[i + 1]:
      array[i],array[i + 1] = array[i + 1],array[i]
    print(array)
  if array == arrayCopy:
    break
  print('%d\n'%j)

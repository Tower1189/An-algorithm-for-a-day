array = [7, 2, 5, 4, 1, 8, 12, 1, 4]

for j in range(len(array) - 1):
  min = j
  for i in range(len(array) - j - 1):
    if (array[min] > array[i + j + 1]):
      min = i + j + 1
  array[j], array[min] = array[min], array[j]
  print array

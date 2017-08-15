array= [7, 2, 5, 4, 1, 8, 12, 6, 8]

def shellsort(array):
  length = len(array)
  increment = int(length / 2)
  while increment > 0:
    for i in range(increment, length):
      while i >= increment and array[i] < array[i - increment]:
        array[i], array[i - increment] = array[i - increment], array[i]
        i -= increment
    increment = int(increment / 2)
  return array

result = shellsort(array)
print result
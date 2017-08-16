array = [7, 2, 5, 4, 1, 8, 12, 6, 8]
# def quicksort(array):
#      if len(array) <= 1:
#          return array  
#      l = [x for x in array[1:] if x <= array[0]]  
#      r = [x for x in array[1:] if x > array[0]]  
#      return quicksort(l) + [array[0]] + quicksort(r)
# print(quicksort(array))

def quicksort(array):
  if len(array) <= 1:
    return array
  left = []
  right = []
  for i in array[1:]:
    if (i <= array[0]):
      left.append(i)
    else:
      right.append(i)
  return quicksort(left) + [array[0]] + quicksort(right)
print(quicksort(array))
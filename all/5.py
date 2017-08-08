array = [7, 2, 5, 4, 1, 8, 12, 1, 4]

for i in range(1, len(array)):
  for j in reversed(range(i + 1)):
    if j > 0:
      if array[j] < array[j - 1]:
        array[j - 1],array[j] = array[j],array[j - 1]    
print array
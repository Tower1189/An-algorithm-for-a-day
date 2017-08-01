array = [1, 5, 3, 1, 4, 2, 5, 3]
newArray = []
# method one
# for value in array:
#   if value not in newArray:
#     newArray.append(value)

# method two
newArray = list(set(array))
print(newArray)


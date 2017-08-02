import copy  
oldList = [1, 2, 3, 4, ['a', 'b']] 
newList = copy.deepcopy(oldList)
print newList

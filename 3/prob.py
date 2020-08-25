"""
Given an array of ints return a new array
where each element in the new array is the number of smaller
elements to the right of the corresponding array element.

EX: [3, 4, 9, 6, 1] --> [1, 1, 2, 1, 0]
"""

def det(n, arr):
    if len(arr) == 0:
        return 0

    elif n > arr[0]:
        return 1 + det(n, arr[1:])

    else:
        return 0 + det(n, arr[1:])

def foo(arr):
    ret = []
    for i in range(len(arr)):
        ret.append(det(arr[i], arr[i:]))

    return ret

print(foo([3, 4, 9, 6, 1]))

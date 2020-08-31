'''
given a 2xN board, and instructed to completely cover the board
with the following shapes:

- Domino or 2x1 rectangle
- Tromino or L shape

ex:
    A B B C
    A B C C

given integer N determine how many ways this task is possible
'''

import math

def calcBoardPos(n):
    if(type(n) is not type(4) or n <= 0):
        return  'error: n must be an int greater then 0'

    posTris = math.floor(n/3)
    return posTris + 1


print(calcBoardPos(2))
print(calcBoardPos(1000))
print(calcBoardPos(-10))
print(calcBoardPos('smf'))
print(calcBoardPos(None))

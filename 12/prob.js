/*
Given two strings, determine the edit distance between them.
The edit distance is defined as the minimum number of edits to change one string
to  the other.

EX: "biting" and "sitting" have an edit distance of 2. (substitue b for s sitting,
and add a t)
*/

function editDistance(wordA, wordB)
{
  count = 0

  for (let i = 0; i < Math.min(wordA.length, wordB.length); i++)
  {
    if (wordA[i] != wordB[i])
    {
      count++
    }
  }
  console.log('predistance count: ' + count)
  count += Math.abs(wordA.length - wordB.length)

  return count;
}

let a = "biting"
let b = "sitting"
console.log(editDistance(a, b))

/*
given a list of numbers and a target number 'k'
return wheter or not there are two numbers in the list
that add up to 'k'

try to do it in a single line pass

ex:
given [4, 7, 1, -3, 2], k = 5 -> return true (4  + 1 = 5)
*/

function two_sumL(list, k)
{
  for (let j = 0; j < list.length; j++)
  {
    for (let k = 0; k < list.length; k++)
    {
      if (list[j] + list[k] == 5) return true;
    }
  }
  return false;
}

console.log(two_sumL([4, 7, 1, -3, 2], 5));

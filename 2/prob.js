/* Given a String, find the length of the longest
substring without repeating characters */

function longestSubstring(s)
{
  let max = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++)
  {
    for (let j = 0; j < arr.length; j++)
    {
      if (s[i] == arr[j])
      {
        if (arr.length > max)
        {
          max = arr.length;
        }
        arr = [];
        break;
      }
    }
    arr.push(s[i]);
  }

  if (arr.length > max)
  {
    max = arr.length;
  }

  return max;
}

console.log(longestSubstring('abrkaabcdefghijxxx')); //should be 11

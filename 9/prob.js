/*
suppose you have a NxN multiplaction table.
ex:
2x2
  1 2
  2 4

given N and X return the number of times X appears in the table.

ex: foo(6, 12) => 4

*/

function appearsHowMany(n, x)
{
  let ret = 0;
  if (typeof n != typeof ret || typeof x != typeof ret || n < 0 || x < 0)
  {
    return 'Error: please pass in valid int >  0';
  }

  // for (let j = 0; j < n; j++)
  // {
  //   for (let k = 0; k < n; k++)
  //   {
  //     if ((j + 1) * (k + 1) === x) ret++;
  //     if ((j + 1) * (k + 1) > x) break;
  //   }
  // }

  for (let i = n; i > 0; i--)
  {
    ret += x % i == 0 ? (x / i <= n ? 1: 0) : 0;
  }
  return ret;
}

console.log(appearsHowMany(6, 12));
console.log(appearsHowMany(1000000000, 200));
console.log(appearsHowMany(-1, 10));
console.log(appearsHowMany(-1, -10));
console.log(appearsHowMany("hello", 10));
console.log(appearsHowMany(-1, undefined));
console.log(appearsHowMany(null, 10));

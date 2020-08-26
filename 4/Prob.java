/*
Given a sorted array, A with possibly dublicated
elements. Find the indices of the first and last occurence
of x. Return -1 if the target is not found.
*/

/*
Ex:
a = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15], target = 9
out: [6,8]

a = [100, 150, 150, 153], target = 150
out: [1, 2]

a = [1, 2, 3, 4, 5, 6, 10], target = 9
out: [-1, -1]
*/



class Prob {
  public static int[] getRange(int[] a, int x)
  {
    int[] ret = {-1, -1};

    for (int i = 0; i < a.length; i++)
    {
      if (a[i] == x && ret[0] == -1)
      {
        ret[0] = i;
      }

      if (a[i] != x && ret[0] != -1 && ret[1] !=  1)
      {
        ret[1] = i - 1;
      }
    }

    if (ret[0] != -1 && ret[1] == -1)
    {
      ret[1] = a.length;
    }

    return ret;
  }

  public static void main(String[] args) {
    int[] arr = {1, 3, 3, 5, 7, 8, 9, 9, 9, 15};
    int target = 9;

    int[] ret = getRange(arr, target);

    System.out.println(ret[0] + " " + ret[1]);
  }
}

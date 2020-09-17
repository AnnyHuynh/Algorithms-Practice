// https://leetcode.com/problems/plus-one/

public class plustOne {
  public static int[] intIncrement(int[] digits) {
    for (int i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      digits[i] = 0;
    }

    int[] result = new int[digits.length + 1];
    result[0] = 1;
    return result;
  }

  public static void main(String[] args) {
    int[] numArray = { 9, 9, 9 };

    // expect {1, 0, 0, 0}. Doesn't print out correctly. Why?
    System.out.println(intIncrement(numArray));
  }
}

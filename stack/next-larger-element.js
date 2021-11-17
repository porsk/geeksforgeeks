// https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1

class Solution {
  nextLargerElement(arr, n) {
    const result = new Array(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] < arr[i]) stack.pop();

      if (stack.length) {
        result[i] = stack[stack.length - 1];
      } else {
        result[i] = -1;
      }

      stack.push(arr[i]);
    }

    return result;
  }
}

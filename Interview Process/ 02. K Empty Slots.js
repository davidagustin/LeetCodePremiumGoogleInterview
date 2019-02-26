/*
There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.

Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, where i and x will be in the range from 1 to N.

Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is k and these flowers are not blooming.

If there isn't such day, output -1.

Example 1:
Input:
flowers: [1,3,2]
k: 1
Output: 2
Explanation: In the second day, the first and the third flower have become blooming.
Example 2:
Input:
flowers: [1,2,3]
k: 1
Output: -1
Note:
The given array will be in the range [1, 20000].
*/

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */

// helper function to see if two elements have all zeroes in between
const flowersInBetween = (flowerStatus, start, end) => {
  for (let i = start; i <= end; i += 1) {
    if (flowerStatus[i] === 1) {
      return false;
    }
  }
  return true;
};

const kEmptySlots = (flowers, k) => {
  // initialize array with same length as argument flowers with all elements as 0;
  const flowerStatus = new Array(flowers.length).fill(0);

  // iterate through flowers array
  for (let i = 0; i < flowers.length; i += 1) {
    // since the flowers array will have an index of an element
    // equal to its length, initialize target to current element minus 1;
    const target = flowers[i] - 1;

    // make flower bloom by assigning flowerStatus of target to 1;
    flowerStatus[target] = 1;

    // pointer1 to look at the flowerStatus at the lower area of the flowerStatus
    // each iteration will attempt to look in between elements within a current sample size according to k
    const pointer1 = target - k - 1;

    // pointer2 to look at the flowerStatus at the higher area of array flowerStatus
    // each iteration will attempt to look in between elements within a current sample size according to k
    const pointer2 = target + k + 1;

    // check if there exist a current bloom (element is equal to 1) in flowerStatus with pointer1
    if (pointer1 >= 0 && flowerStatus[pointer1] === 1) {
      // go to helper function to check if all numbers in between pointer1 and target are zeroes
      if (flowersInBetween(flowerStatus, pointer1 + 1, target - 1)) {
        // return current day plus 1 since current index starts at 0
        return i + 1;
      }
    }

    // check if there exist a current bloom (element is equal to 1) in flowerStatus with pointer2
    if (pointer2 < flowerStatus.length && flowerStatus[pointer2] === 1) {
      // go to helper function to check if all numbers in between pointer2 and target are zeroes
      if (flowersInBetween(flowerStatus, target + 1, pointer2 - 1)) {
        // return current day plus 1 since current index starts at 0
        return i + 1;
      }
    }
  }
  // return -1 if all elements have been checked and cannot fulfill the blooming requirements
  return -1;
};

const argument1 = [1, 3, 2];
const argument2 = 1;

const actual = kEmptySlots(argument1, argument2);
const expected = 2;
const testName =
  'output in which day there exists two flowers in the status of blooming, and also the number of flowers between them ' +
  'is k and these flowers are not blooming.';

const assertkEmptySlots = (input, output, test) => {
  if (input !== output) {
    return `ERROR ${test}, expected ${output} but got ${input}`;
  }
  return 'passed';
};

const answer = assertkEmptySlots(actual, expected, testName);

console.log(answer);

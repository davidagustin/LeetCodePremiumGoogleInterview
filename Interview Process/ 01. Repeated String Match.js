/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

 const repeatedStringMatch = (A, B) => {
  // find the ceiling of the length of argument B divided by the length of argument A
  const count = Math.ceil(B.length / A.length);

  // repeat the string according to argument B
  const str = A.repeat(count);

  // case if argument A is already a substring of argument B
  if (str.includes(B)) {
    return count;
  }

  // case if substring can be created for argument B
  if ((str + A).includes(B)) {
    return count + 1;
  }

  // return -1 if argument A cannot be a substring for argument B
  return -1;
};

const argumentA = 'abcd';
const argumentB = 'cdabcdab';

const actual = repeatedStringMatch(argumentA, argumentB);
const expected = 3;
const testName =
  'finds the minimum number of times A has to be repeated such that B is a substring of it';

const assertRepeatedStringMatch = (input, output, test) => {
  if (input !== output) {
    return `ERROR ${test}, expected ${output} but got ${input}`;
  }
  return 'passed';
};

const answer = assertRepeatedStringMatch(actual, expected, testName);

console.log(answer);

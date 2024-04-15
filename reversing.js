/* Reverse Words in a String */
// Given an input string, reverse the order of the words.
// The returned string should only have a single space separating the words.

/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = function (s) {
  return s.split(' ').filter(x => x !== '').reverse().join(' ');
}

const stringEx = "a good   example";
console.log('reverseWords:', reverseWords(stringEx));

/* Reverse Words in a String II */
// Given a character array, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in the array will be separated by a single space.
// Your code must solve the problem in-place, i.e. without allocating extra space.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseWords2 = function (s) {
  const reversed = s.join('').split(' ').reverse().join(' ').split('');

  for (let i = 0; i < s.length; i++) {
    s[i] = reversed[i];
  }

  console.log(s);
};

const sArr1 = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
console.log('reverseWords2:', reverseWords2(sArr1));

/* Revers Vowels of a String */
// Reverse only all the vowels in the string and return it.

/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = function(s) {
  const vowels = "AEIOUaeiou";
  const arr = [...s];
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!vowels.includes(arr[start])) {
      start++;
    }

    if (!vowels.includes(arr[end])) {
      end--;
    }

    if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++;
      end--;
    }
  }

  return arr.join('');
};
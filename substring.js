/* Longest Substring Without Repeating Characters */
// Given a string, find the length of the longest substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  // seen characters
  const seen = new Map();
  // starting index of current substring
  let start = 0;
  // max substring length
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen.has(char)) {
      start = Math.max(seen.get(char) + 1, start);
    }

    seen.set(char, i);
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
}

console.log('lengthOfLongestSubstring:', lengthOfLongestSubstring("abcabcdbb"));
/**
 * The key is to treat this as a rolling window (kind of like the snake game!)
 * Roll one off and add another one
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let left = 0;
    let max = 0;
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        max = Math.max(max, i - left + 1);
    }

    return max;
};
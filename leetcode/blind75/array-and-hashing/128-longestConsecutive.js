/**
 * 128. Longest Consecutive Sequence
 * This question required O(n) specific runtime
 * This can be achieved with either a hashmap or a hashset for quick retrieval
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveHashSet = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {   // this ensures that we are checking from the lowest point onwards and ignore everything else
            let length = 1;

            while (numSet.has(n + length)) {    // iterate upwards until we hit the max length possible
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutiveHashMap(nums) {
    const mp = new Map();
    let res = 0;

    for (let num of nums) {
        if (!mp.has(num)) {
            mp.set(
                num,
                (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1,    // this allows us to check left and right of the number we come across
            );
            mp.set(num - (mp.get(num - 1) || 0), mp.get(num));          // these two lines ensure that we will always get an updated version of the streak
            mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
            res = Math.max(res, mp.get(num));
        }
    }
    return res;
}
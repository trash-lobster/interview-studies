/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        map[n] = (map[n] || 0) + 1;
    }

    for (const n in map) {
        freq[map[n]].push(parseInt(n));
    }

    const res = [];
    for ( let i = freq.length - 1; i > 0 ; i-- ) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
};
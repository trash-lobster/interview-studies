/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const res = [];

    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
        const j = n - 1 - i;
        suffix[j] = nums[j + 1] * suffix[j + 1];
    }

    for (let i = 0; i < n; i++) {
        res.push(prefix[i] * suffix[i]);
    }

    return res;
};
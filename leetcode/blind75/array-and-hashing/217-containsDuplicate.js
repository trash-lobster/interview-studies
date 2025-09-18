/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};

/**
 * This solution is slightly faster since it can escape earlier
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateV2 = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
};
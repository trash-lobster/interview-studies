/**
 * My solution: it's not the fastest
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // create a hashkey from it
    const map = new Map();

    for (let s of strs) {
        const key = getKey(s);
        const arr = map.get(key) || [];
        arr.push(s);
        map.set(key, arr);
    }

    return map.values().toArray();
};

function mergeToKey(arr) {
    return arr.join('$$');
}

function getKey(s) {
    const ans = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        ans[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    return mergeToKey(ans);
}


/**
 * Switching over to this improved the run time significantly
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsV2 = function(strs) {
    // create a hashkey from it
    const map = {};

    for (let s of strs) {
        const key = getKey(s);
        const arr = map[key] || [];
        arr.push(s);
        map[key] = arr;
    }

    return Object.values(map);
};

function getKey(s) {
    const ans = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        ans[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    return ans.join(',');
}
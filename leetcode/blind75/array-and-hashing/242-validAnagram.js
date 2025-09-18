/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const n = s.length;
    const occ = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        occ[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        occ[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < 26; i++) {
        if (occ[i] !== 0) return false;
    }

    return true;
};
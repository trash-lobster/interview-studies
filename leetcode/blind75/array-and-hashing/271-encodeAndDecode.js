class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res =  '';

        for (const s of strs) {
            res += (s.length).toString() + '#' + s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // find the first numbers until '#' -> parse
        let i = 0;
        const res = [];

        while ( i < str.length ) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const num = parseInt(str.substring(i, j));
            i = j + 1;
            j = num + i;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
class Solution {
    #alphabetsCount = 26;

    // number to sub from chr to get 0 based index
    #toSub = "a".charCodeAt(0);

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // {code: anagrams[]}
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const code = this.#genCode(strs[i]);
            if (map.has(code)) {
                const arr = map.get(code);
                arr.push(strs[i]);
                map.set(code, arr);
            } else {
                map.set(code, [strs[i]]);
            }
        }

        return Array.from(map).map((a) => a[1]);
    }

    /**
     * @param {string} str
     * @return {number}
     */
    #genCode(str) {
        const freq = Array.from({ length: this.#alphabetsCount }).fill(0);

        for (let i = 0; i < str.length; i++) {
            freq[str.charCodeAt(i) - this.#toSub]++;
        }

        return freq.join("#");
    }
}

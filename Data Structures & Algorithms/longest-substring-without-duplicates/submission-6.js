class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let cSet = new Set();
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            while (cSet.has(s[right])) {
                cSet.delete(s[left]);
                left++;
            }

            cSet.add(s[right]);
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
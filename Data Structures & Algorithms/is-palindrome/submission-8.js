class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // by sanitizing the string we use O(n) extra space so, lets try with O(1) extra space
        const reg = /[^a-zA-Z0-9]/; // dont use /g in regex
        let start = 0;
        let end = s.length - 1;

        while (start <= end) {
            if (reg.test(s[start])) {
                start++;
                continue;
            }

            if (reg.test(s[end])) {
                // don't forget to decrease the end and increase the start
                end--;
                continue;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}

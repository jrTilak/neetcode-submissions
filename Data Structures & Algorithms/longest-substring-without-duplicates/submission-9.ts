class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const lastSeen = new Map<string, number>();

        let start = 0;
        let longest = 0;

        for (let end = 0; end < s.length; end++) {
            const ch = s[end];

            if (lastSeen.has(ch)) {
                start = Math.max(start, lastSeen.get(ch)! + 1);
            }

            lastSeen.set(ch, end);
            longest = Math.max(longest, end - start + 1);
        }

        return longest;
    }
}
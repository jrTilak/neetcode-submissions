class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longestSubStr = 0;

        const visitedCharsSet = new Set();

        let start = 0;
        let end = 0;

        let currSubStr = 0;

        while (end < s.length) {
            if (visitedCharsSet.has(s[end])) {
                // remove untill we encounter this char
                let isDone = false;
                let i = 0;
                visitedCharsSet.forEach((point) => {
                    if (isDone) return;

                    if (point === s[end]) {
                        isDone = true;
                        start = i;
                    }
                    visitedCharsSet.delete(point);
                    currSubStr--;
                    i++;
                });
            } else {
                visitedCharsSet.add(s[end]);
                currSubStr++;
                end++;
            }

            if (currSubStr > longestSubStr) longestSubStr = currSubStr;
        }

        return longestSubStr;
    }
}

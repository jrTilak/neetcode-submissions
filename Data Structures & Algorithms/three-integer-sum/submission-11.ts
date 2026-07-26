class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b);

        let currIndex = 0;

        const ans: number[][] = [];

        while (currIndex < sorted.length - 2) {
            let leftPtr = currIndex + 1;
            let rightPtr = sorted.length - 1;

            const target = -sorted[currIndex];

            while (leftPtr < rightPtr) {
                const sum = sorted[leftPtr] + sorted[rightPtr];
                if (sum < target) {
                    leftPtr++;
                } else if (sum > target) {
                    rightPtr--;
                } else {
                    ans.push(
                        [sorted[leftPtr], sorted[rightPtr], sorted[currIndex]].sort(
                            (a, b) => a - b,
                        ),
                    );
                    leftPtr++;
                    rightPtr--;
                }
            }
            currIndex++;
        }

        return Array.from(new Set(ans.map((a) => a.join("#")))).map((a) =>
            a.split("#").map(Number),
        );
    }
}

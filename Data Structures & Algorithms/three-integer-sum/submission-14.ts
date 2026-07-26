class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        let currIndex = 0;
        const ans: number[][] = [];

        while (currIndex < nums.length - 2) {
            // skip duplicate currIndex
            if (currIndex > 0 && nums[currIndex] === nums[currIndex - 1]) {
                currIndex++;
                continue;
            }

            let leftPtr = currIndex + 1;
            let rightPtr = nums.length - 1;

            const target = -nums[currIndex];

            while (leftPtr < rightPtr) {
                const sum = nums[leftPtr] + nums[rightPtr];

                if (sum < target) {
                    leftPtr++;
                } else if (sum > target) {
                    rightPtr--;
                } else {
                    ans.push([nums[currIndex], nums[leftPtr], nums[rightPtr]]);

                    leftPtr++;
                    rightPtr--;

                    // skip duplicate left
                    while (leftPtr < rightPtr && nums[leftPtr] === nums[leftPtr - 1]) {
                        leftPtr++;
                    }

                    // skip duplicate right
                    while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr + 1]) {
                        rightPtr--;
                    }
                }
            }

            currIndex++;
        }

        return ans;
    }
}

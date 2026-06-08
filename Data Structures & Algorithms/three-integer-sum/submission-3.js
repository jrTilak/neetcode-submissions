class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort in ascending order
        nums.sort((a, b) => a - b);
        const triplets = [];
        for (let i = 0; i < nums.length; i++) {
            let start = i + 1;
            let end = nums.length - 1;
            const target = -nums[i];

            while (start < end) {
                const sum = nums[start] + nums[end];
                if (sum === target) {
                    triplets.push([nums[i], nums[start], nums[end]]);
                    start++
                    end--
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }

        // make unique

        return [...new Set(triplets.map(t=>JSON.stringify(t)))].map(t=>JSON.parse(t))
    }
}

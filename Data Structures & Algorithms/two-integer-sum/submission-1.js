class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // { target-num : index}
        const hash = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (hash.has(nums[i])) {
                const pairIndex = hash.get(nums[i]);
                if (pairIndex > i) return [i, pairIndex];
                return [pairIndex, i];
            } else {
                hash.set(target - nums[i], i);
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // product without zero

        let tp = 1;
        // set of indices containing zero
        let zerosCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zerosCount++;
            } else {
                tp = nums[i] * tp;
            }
        }

        if (zerosCount > 1) {
            return Array.from({ length: nums.length }).fill(0);
        } else if (zerosCount === 1) {
            return Array.from({ length: nums.length }).map((_, i) => {
                if (nums[i] === 0) return tp
                return 0;
            });
        }
        // no zeros
        else {
            return Array.from({ length: nums.length }).map((_, i) => {
                return tp / nums[i];
            });
        }
    }
}

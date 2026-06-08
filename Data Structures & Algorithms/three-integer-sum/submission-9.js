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

            // if the prev and current nums are same it will generate duplicate so we can skip this,
            // instead of remove at last.
            if (nums[i] === nums[i - 1]) continue;

            while (start < end) {
                const sum = nums[start] + nums[end];

                if (sum === target) {
                    triplets.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;

                    while (start < end && nums[start] === nums[start - 1]) {
                        start++;
                    }

                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }

        return triplets;
    }
}

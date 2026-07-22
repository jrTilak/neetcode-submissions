class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // producs of nums before the current index
        // arr[i] contains prod of nums before i
        const prefixProd = [];
        const suffixProd = [];

        let total = 1;

        for (let i = 0; i < nums.length; i++) {
            // 1st is becuase first ha no prefix and doesnot effect multiplication
            if (i === 0) prefixProd[i] = 1;
            else {
                total *= nums[i - 1];
                prefixProd[i] = total;
            }
        }

        // reset total
        total = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            // 1st is 1 becuase first ha no prefix and doesnot effect multiplication
            if (i === nums.length - 1) suffixProd[i] = 1;
            else {
                total *= nums[i + 1];
                suffixProd[i] = total;
            }
        }

        return Array.from({ length: nums.length }).map((_, i) => {
            return prefixProd[i] * suffixProd[i];
        });
    }
}

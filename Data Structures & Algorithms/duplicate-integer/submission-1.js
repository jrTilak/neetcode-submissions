class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // num: freq
        const map = new Map()

        // if we incounter 1st time we initialized with 1
        // if we encounter next time just return true

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) return true
            else map.set(nums[i], 1)
        }
        return false
    }
}

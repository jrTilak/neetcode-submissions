class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // num: freq
        const set = new Set()

        // if we incounter 1st time we initialized with 1
        // if we encounter next time just return true

        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i])) return true
            else set.add(nums[i])
        }
        return false
    }
}

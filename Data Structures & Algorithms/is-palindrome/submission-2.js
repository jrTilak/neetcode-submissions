class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitized = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase()
        for (let i = 0; i < (sanitized.length / 2); i++){
            if(sanitized[i] !== sanitized[sanitized.length - 1 - i]){
                return false
            }
        }

        return true
    }
}

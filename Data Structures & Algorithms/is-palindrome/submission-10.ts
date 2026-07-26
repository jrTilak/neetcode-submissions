class Solution {
    private _isAlphaNum(s: string) {
        const regex = /[a-zA-Z0-9]+/;
        return regex.test(s);
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let leftPtr = 0;
        let rightPtr = s.length - 1;

        while (leftPtr < rightPtr) {
            let leftChar = s[leftPtr];
            while (!this._isAlphaNum(leftChar) && leftPtr < rightPtr) {
                leftPtr++;
                leftChar = s[leftPtr];
            }

            let rightChar = s[rightPtr];
            while (!this._isAlphaNum(rightChar) && leftPtr < rightPtr) {
                rightPtr--;
                rightChar = s[rightPtr];
            }

            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            } else {
                leftPtr++;
                rightPtr--;
            }
        }

        return true;
    }
}

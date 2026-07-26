class Solution {
    private _openingBrackets = new Set(["(", "{", "["]);

    private _pairs = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            // opening bracket
            if (this._openingBrackets.has(s[i])) {
                stack.push(s[i]);
            }
            //closing bracket
            else {
                if (this._pairs[stack.pop()] === s[i]) {
                    continue;
                } else {
                    return false;
                }
            }
        }

        return stack.length > 0 ? false : true;
    }
}

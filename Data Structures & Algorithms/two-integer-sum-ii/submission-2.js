class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // using hash map but it will take O(n) extra space

        const sum = new Map();
        //{ req : index}

        let result
        numbers.forEach((n, i) => {
            if (sum.has(n)) {
                const nextIdx = sum.get(n);
                if (i > nextIdx) result =  [nextIdx + 1, i + 1];
                else result =  [i + 1, nextIdx + 1];
            } else {
                sum.set(target - n, i);
            }
        });

        return result
    }
}

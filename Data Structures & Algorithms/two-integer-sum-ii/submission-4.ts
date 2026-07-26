class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPtr = 0;
        let rightPtr = numbers.length - 1;

        while (leftPtr < rightPtr) {
            if (numbers[leftPtr] + numbers[rightPtr] > target) {
                rightPtr--;
            } else if (numbers[leftPtr] + numbers[rightPtr] < target) {
                leftPtr++;
            } else {
                return [leftPtr + 1, rightPtr + 1];
            }
        }
    }
}

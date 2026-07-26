class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftPtr = 0;
        let rightPtr = heights.length - 1;

        let maxVol = 0;

        while (leftPtr < rightPtr) {
            const vol =
                Math.abs(leftPtr - rightPtr) * Math.min(heights[leftPtr], heights[rightPtr]);

            if (vol > maxVol) maxVol = vol;

            if (heights[leftPtr] < heights[rightPtr]) {
                leftPtr++;
            } else {
                rightPtr--;
            }
        }

        return maxVol;
    }
}

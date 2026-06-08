class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let start = 0;
        let end = heights.length - 1;
        while (start < end) {
            const area = (end - start) * Math.min(heights[start], heights[end]);
            if (area > maxArea) {
                maxArea = area;
            }
            
            if (heights[start] > heights[end]) {
                end--;
            } else {
                start++;
            }
        }

        return maxArea;
    }

    area(space, heights) {
        return;
    }
}

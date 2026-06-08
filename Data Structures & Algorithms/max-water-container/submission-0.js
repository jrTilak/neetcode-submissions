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
            const area = this.area(end - start, [heights[start], heights[end]]);
            if (area > maxArea) {
                maxArea = area;
            } else {
                if (heights[start] > heights[end]) {
                    end--;
                } else {
                    start++;
                }
            }

            while (start < end && heights[start] === heights[start - 1]) {
                start++;
            }

            while (start < end && heights[end] === heights[end + 1]) {
               end--
            }
        }

        return maxArea;
    }

    area(space, heights) {
        return space * Math.min(...heights);
    }
}

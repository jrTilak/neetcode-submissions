class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0;
        let sell = 1;

        let maxProfit = 0;

        while (sell < prices.length) {
            const profit = prices[sell] - prices[buy];

            if (profit > maxProfit) {
                maxProfit = profit;
            }

            if (prices[sell] < prices[buy]) {
                buy = sell;
            }

            sell++;
        }

        return maxProfit;
    }
}
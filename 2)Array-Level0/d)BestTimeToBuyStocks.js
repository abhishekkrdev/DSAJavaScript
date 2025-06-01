// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Brute Force
var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
};

// Optimized
var maxProfit = function (prices) {
    const n = prices.length;

    let min = prices[0];
    let result = 0;

    for (let i = 0; i < n; i++) {
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return result;
};

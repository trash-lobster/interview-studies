function maxProfit(prices) {
    let maxProfit = 0;

    let l = 0;
    let r = l + 1;

    while ( r < prices.length ) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            // we can make this adjustment because we want the smallest possible digit on the buy
            l = r;
        }
        r++;
    }

    return maxProfit;
}
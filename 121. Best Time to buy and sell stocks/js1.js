/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let maxValue = -1;
    for(let i=prices.length-1;i>=0;i--){
        if(maxValue< prices[i]){
            maxValue = prices[i];
        }
        const curProfit = maxValue - prices[i];
        if(curProfit > maxProfit){
            maxProfit = curProfit;
        }
    }
    return maxProfit;
    
};
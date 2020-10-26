/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let startIndex = 0, i = 0, profit = 0;
    
    while(i<prices.length-1){
        if(prices[i]> prices[i+1]){
            profit+=  prices[i] - prices[startIndex];
            startIndex = i + 1;
        }
        i++;
    }
    if(startIndex !== prices.length -1){
        profit+=  prices[prices.length - 1] - prices[startIndex];
    }
    return profit;
    
};
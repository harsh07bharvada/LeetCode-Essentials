/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    let dp = {};
    
    const isSqr = n =>{
        return Math.sqrt(n) % 1 === 0;
    }
    const traverse = num =>{
        if(isSqr(num)){
            dp[num] = 1;
            return 1;
        }
        let min = Infinity;
        for(let i=1;i<=num/2;i++){
            let left = dp[i] ? dp[i] : traverse(i);
            let right = dp[num - i] ? dp[num - i] : traverse(num - i);
            min = Math.min(min, (left + right));
        }
        dp[num] = min;
        return min;
    }
    return traverse(n);
    
};
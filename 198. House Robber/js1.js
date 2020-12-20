/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = [0,0];
    
    for(let i=0;i<nums.length;i++){
        dp[i+2] = Math.max(dp[i+1], nums[i] + dp[i] );
    }
    
    return dp[dp.length-1]
};
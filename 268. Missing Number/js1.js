/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const curSum = nums.reduce((acc,v)=>{
        acc+=v;
        return acc;
    },0);
    const res = (nums.length*(nums.length+1)/2) - curSum;
    return res;
};
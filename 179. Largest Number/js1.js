/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    nums.sort((a,b)=> Number(String(b) + String(a)) - Number(String(a)+String(b)) )
    return BigInt(nums.join("")).toString();
};
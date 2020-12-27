/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let copy = Array.from(nums);
    copy.sort((a,b)=>a-b);
    let min = Infinity, max = -Infinity;

    //If number not in proper position then check min or max

    for(let i=0;i<nums.length;i++){
        if(copy[i] !== nums[i]){
            min = Math.min(min, i);
            max = Math.max(max, i);
        }
    }
    return max-min + 1 === -Infinity ? 0 : max-min + 1; 
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(!nums || nums.length < 3){
        return false;
    }
    let suffixMax = Array(nums.length).fill(-Infinity), curMax = -Infinity;
    let prefixMin = Array(nums.length).fill(Infinity), curMin = Infinity;
    for(let i=nums.length - 2;i>=0;i--){
        suffixMax[i] = Math.max(nums[i+1], curMax);
        curMax = suffixMax[i]
    }
    
    for(let i=1;i<nums.length;i++){
        prefixMin[i] = Math.min(nums[i-1], curMin);
        curMin = prefixMin[i]
    }
    
    for(let i=1;i<nums.length-1;i++){
        if(prefixMin[i] < nums[i] && nums[i] < suffixMax[i]){
            return true
        }
    }
    return false
    
    
};

//CREATE PREFIX MIN ARRAY TO FIND MIN VALUE ON LEFT SIDE
//CREATE SUFFIX MAX ARRAY TO FIND MAX VALUE ON RIGHT SIDE
//ITERATE AND CHECK IF CURRENT IS GREATER THAN LEFT SIDE MIN AND LESS THAN RIGHT SIDE MAX
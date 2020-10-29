/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const state = {};
    for(let i=0;i<nums.length;i++){
        if(state[nums[i]]){
            return true;
        }
        else{
            state[nums[i]] = true;
        }
    }
    return false;
};
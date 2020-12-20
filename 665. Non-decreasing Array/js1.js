/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(!nums || (nums && nums.length < 2) )
        return true;
    let count=0;
    
    
    const isIncreasing = (nums) => {
        
        for(let i=0;i<nums.length-1;i++){
            if(nums[i] > nums[i+1]){
                return false;
            }
        }
        return true;
    }
    
    for(let i=0;i<nums.length;i++){
        let copy = nums.slice(0);
        copy.splice(i,1);
        
        if(isIncreasing(copy)){
            count++;
        }
    }
    
    
    return count;
    
};
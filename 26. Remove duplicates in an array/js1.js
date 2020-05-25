/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i=1,index = 0;
    let current = nums[0];
    while(i<nums.length)
    {
        if(nums[i] !== nums[index])
        {
            nums.splice(index+1,i-index-1);
            i = index+1;
            index = i;
            
        }
        else
            i++;
        
    }
    
    
    if(index !== i-1)
        nums.splice(index+1,i-index-1);
    
    
    return nums.length;
};
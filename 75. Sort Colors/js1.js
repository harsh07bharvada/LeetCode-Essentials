/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length <= 1)
        return;
    let left = 0, right = nums.length -1 ;
    
    while(left < right){
        if(nums[left] === 2 && nums[right] !== 2){
            [nums[left], nums[right]] = [nums[right],nums[left]];
            right--;
            left++;
        }else if(nums[right] === 2){
            right--;
        }else{
            left++;
        }
    }
    
    if(left === 0){
        return;
    }else{
        left = 0;
        if(nums[right] === 2){
            right--;
        }
         while(left < right){
            
            if(nums[left] === 1 && nums[right] === 0){
                [nums[left], nums[right]] = [nums[right],nums[left]];
                right--;
                left++;
            }else if(nums[right] === 1){
                right--;
            }else{
                left++;
            }
        }
    }
    
};
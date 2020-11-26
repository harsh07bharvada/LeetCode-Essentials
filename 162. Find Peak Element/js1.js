/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, low = 0, high = nums.length-1) {
    const mid =  Math.floor((low+high)/2);
    const left = mid - 1 < 0 ? -Infinity : nums[mid-1];
    const right = mid +1 > nums.length -1 ? -Infinity : nums[mid+1];
    
    if(nums[mid] > left && nums[mid] > right)// if greater than both then return
        return mid;
    else if(nums[mid] < right)// if right is greater that means definitely there will be a value in the right side 
        return findPeakElement(nums, mid+1, high);
    else// go if left is greater then go left 
        return findPeakElement(nums, low, mid-1);
        
};
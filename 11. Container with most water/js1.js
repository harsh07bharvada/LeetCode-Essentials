

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0, right = height.length - 1, max = 0;
    while(left < right){
        const area = Math.min(height[left],height[right]) * Math.abs(left-right);
        if(area> max){
            max = area;
        }
        if(height[left]< height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
    
};
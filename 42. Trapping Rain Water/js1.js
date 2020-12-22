/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let leftMaxList = Array(height.length).fill(0);
    let rightMaxList = Array(height.length).fill(0);
    let leftMax = -Infinity, rightMax = -Infinity, sum=0;
    for(let i=0, j=height.length -1; i< height.length,j>=0;i++,j--){
        if(height[i] > leftMax){
            leftMax = height[i];
        }
        if(height[j] > rightMax){
            rightMax = height[j];
        }
        leftMaxList[i] = leftMax;
        rightMaxList[j] = rightMax;
    }
    for(let i=0;i<height.length;i++){
        sum+= (Math.min(leftMaxList[i], rightMaxList[i]) - height[i]);
    }
    //console.log(sum);
    return sum
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = {};
    const add = index=>{
        

        if(!dp[index]){

            let i2 = nums[index],i3 = nums[index];
            
            if(index+2 < nums.length)
                i2 += add(index+2);

            if(index+3 < nums.length)
            i3 += add(index+3);

            dp[index] = Math.max(i2,i3);

        }
        return dp[index];
        
            
    }
    
    if(nums.length === 0)
        return 0;
    else if(nums.length === 1)
        return nums[0];
    else{
        return Math.max(add(0), add(1));

    }
    
    
    
};
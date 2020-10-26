/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = nums.findIndex(v=>v === 0);
    if(i!== -1){
        while(!checkCorrect(nums)){
        
            let index = nums.findIndex(v=>v === 0);
            for(let j=index;j<nums.length-1;j++){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
            }        

        }
    }
    
};

const checkCorrect = nums => {
        let index = nums.findIndex(v=>v === 0);
        if(index !== -1){
            for(let i = index; i<nums.length;i++){
                if(nums[i] !== 0){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
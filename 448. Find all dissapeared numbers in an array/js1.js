/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i=0,res=[];
    while(i<nums.length){

        if(nums[nums[i]-1] !== nums[i]){  
            [ nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i]-1]];    
        }else{     
            i++;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(i+1 !== nums[i])
            res.push(i+1);
    }
    return res;
};
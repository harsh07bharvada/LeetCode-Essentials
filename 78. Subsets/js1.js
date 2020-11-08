/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    
    const findSub = (cur, index)=>{
        if(index === nums.length){
            res.push(cur);
            return;
        }
        
        findSub(cur,index+1);
        let newList = Array.from(cur);
        newList.push(nums[index]);
        findSub(newList,index+1);
    }
    
    findSub([],0);
    
    return res;
    
};
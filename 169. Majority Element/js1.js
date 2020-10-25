/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const state = nums.reduce((acc,v)=>{
        if(acc[v]){
            acc[v] = ++acc[v];
        }else{
            acc[v] = 1;
        }
        if(acc[v] > nums.length/2){
                acc['res'] = v;
            }
        return acc;
    },{});
    return state['res'];
    
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    
    const perm = (resultArray, toBeSlicedArray, res) =>{
        
        if(toBeSlicedArray && toBeSlicedArray.length === 1){
            
            res.push(resultArray.concat(toBeSlicedArray) );
            
        }else{
            for(let i = 0;i< toBeSlicedArray.length;i++){
                
                let left = toBeSlicedArray.slice(0,i);
                let right = toBeSlicedArray.slice(i+1);
                
                let curRes = Array.from(resultArray);
                curRes.push(toBeSlicedArray[i]);
                
                perm(curRes, left.concat(right), res);
            }
        }
    }
    
    if(nums.length <= 1 )
        return [nums];
    else {
        const res = [];
        perm([], nums,res);
        return res;
    }
    
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let small = nums1.length <= nums2.length ? nums1 :nums2;
    let big = nums1.length <= nums2.length ? nums2 :nums1;
    let res = [];
    
    small.forEach(v=>{
        let index = big.indexOf(v);
        if(index > -1){
            res.push(v);
            big.splice(index,1);
        }
    });
    
    return res;
};
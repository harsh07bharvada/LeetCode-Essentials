/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(m>0 && n>0){

        /** Compare end indices, if nums1 is greater than nums2 then put that value at the proper position of the array */
        if(nums1[m-1]>=nums2[n-1]){
            nums1[m+n-1] = nums1[m-1];
            m--;
        }
        /**Else put nums2 value at the proper position array */
        else{
            nums1[m+n-1] = nums2[n-1];
            n--;
        }
    }

    /**If some values were even less than first of nums1 then replace that many values at the start with these values */
    if(n>0){
        nums1.splice(0,n,...nums2.splice(0,n));
    }
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    if(nums.length>0){
        let low = 0;
        let high = nums.length - 1;
        let mid = Math.floor((low + high) / 2);
        let root = new TreeNode(nums[mid],undefined,undefined );
        createChilds(nums,low,mid,high,root);
        return root; 
    }
    return null;
};

const createChilds = (nums, low, mid, high, root) =>{
    
    if(root){
    
    let leftIndex = Math.floor(( low + mid - 1 )/2);  
    let rightIndex = Math.floor(( mid + 1 + high )/2 ); 

    if(low !== mid)
        root.left = new TreeNode(nums[leftIndex],undefined,undefined);
    
    if(mid!==high)
        root.right = new TreeNode(nums[rightIndex],undefined,undefined);

        createChilds(nums, low, leftIndex, mid-1, root.left);

        createChilds(nums, mid+1, rightIndex, high, root.right);

    }
    

}
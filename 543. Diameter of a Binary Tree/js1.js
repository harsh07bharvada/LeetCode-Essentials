/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;
    let max = -Infinity;
    const traverse = ( node, depth)=>{
        if(node){
            
            const left = traverse(node.left, depth +1);
            const right = traverse(node.right, depth +1);
            if(left+right > max){
                max = left + right;
            }
            return Math.max(left,right) + 1;
        }else{
            return 0;
        }
    }
    traverse(root, 0);
    return max !== -Infinity ? max : 0;
};
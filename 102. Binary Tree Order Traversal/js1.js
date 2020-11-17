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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let state = {};
    const traverse = (node, depth)=>{
        
        if(node){
            traverse(node.left, depth+1);
            
            state[depth] = state[depth] ? [...state[depth], node.val] : [node.val];
            
            traverse(node.right, depth+1);
        }
    }
    
    traverse(root,0);
    
    return Object.values(state);
    
};
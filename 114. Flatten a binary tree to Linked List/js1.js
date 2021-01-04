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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    const traverse = node =>{
        if(node){
            let [leftNode, leftLast] = traverse(node.left);
            let [rightNode, rightLast] = traverse(node.right);
            
            if(leftNode){
                node.left = null;
                node.right = leftNode

                if(leftLast){
                    leftLast.left = null;
                    leftLast.right = rightNode;
                }else{
                    leftNode.left = null;
                    leftNode.right = rightNode;
                }
            }

            return [node, rightLast || rightNode || leftLast || leftNode];
        }
        return [null,null];
    }
    
    traverse(root);
    
};
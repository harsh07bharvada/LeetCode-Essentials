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
var maxDepth = (root) => traverse(root, 0);

const traverse = (node, i) => {
    if (node) {
        i++;
        const leftLen = traverse(node.left, i);
        const rightLen = traverse(node.right, i);
        return leftLen > rightLen ? leftLen : rightLen;
    }
    return i;
}
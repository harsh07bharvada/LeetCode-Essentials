/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length)
        return null
    let state = {};
    for(let i=0;i< preorder.length;i++)
        state[preorder[i]] = i;
    
    console.log(state)
    const getRootIndex = subTree =>{
        let min = Infinity;
        subTree.forEach(v=>{
            if(state[v] < min)
                min = state[v];
        });
        return inorder.indexOf(preorder[min]);
    }
    
    const createTree = (root, left, right) =>{
        
        const leftSubTree = inorder.slice(left, root);
        const rightSubTree = inorder.slice(root+1, right);
        const rootNode = new TreeNode(inorder[root],null,null);
        
        if(leftSubTree.length > 0){
            
            const leftRootIndex = getRootIndex(leftSubTree);
            rootNode.left = createTree( leftRootIndex, left, root);
        }
        if(rightSubTree.length > 0){
            const rightRootIndex = getRootIndex(rightSubTree);
            
            rootNode.right = createTree( rightRootIndex, root+1, right);
            
        }
        
        return rootNode;
    }
    
    const mainRoot = createTree(inorder.indexOf(preorder[0]), 0, preorder.length);
    return mainRoot;
    
};
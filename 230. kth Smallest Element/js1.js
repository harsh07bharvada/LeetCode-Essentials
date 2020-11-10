var kthSmallest = function(root, k) {
    
    //console.log(root);
    let arr = [];
    const inorder = (node) => {
        if(!node)
            return;
        else
        {
            inorder(node.left);
            arr.push(node.val);
            inorder(node.right);
        }
    }
    
    inorder(root);
    return arr[k-1];
    
};
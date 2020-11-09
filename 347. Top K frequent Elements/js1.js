function TreeNode(key, val, left, right) {
    this.key = (key===undefined ? 0 : key);
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let state = {}, root = null, res = [];
    const insertInTree = (cur, node)=>{
        if(!cur){
            root = node;
        }else{
            if(cur.val >= node.val){
                if(cur.left){
                    insertInTree(cur.left, node);
                }else{
                    cur.left = node;
                }
            }else{
                if(cur.right){
                    insertInTree(cur.right, node);
                }else{
                    cur.right = node;
                }
            }
        }
    }
    
    const traverse = root =>{
        if(root){
            traverse(root.right);
            res.push(root.key);
            traverse(root.left);
        }
    }
    
    
    for(let i=0;i<nums.length;i++){
        state[nums[i]] = state[nums[i]] ? state[nums[i]] + 1 : 1;
    }
    
    console.log(state);
    
    Object.entries(state).forEach(([key,value])=>{
        let node = new TreeNode(key,value);
        console.log(node);
        insertInTree(root,node);
    })
    traverse(root);
    console.log(res);
    return res.slice(0,k);
};
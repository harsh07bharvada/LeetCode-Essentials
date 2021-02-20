class SegmentTree{

    tree = []
    list = []
    top = 0
  
    constructor(list = []){
  
      //If list is valid then assign
      if(list && Array.isArray(list)){
        this.list = list;
        
      }
      this.build();
    }
  
    build(){
  
      //If list is not empty then build tree
      if(this.list.length){
        const low = 0, high = this.list.length - 1;
        this.top = this.createTreeNode(low, high, 0);
      }
      
    }
  
    createTreeNode(low, high, pos){
      if(low === high){
        this.tree[pos] = this.list[low];
        return;
      }
      const mid = Math.floor((low+high)/2);
      const leftPos = 2*pos + 1;
      const rightPos = 2*pos + 2;
      this.createTreeNode(low, mid, leftPos);
      this.createTreeNode(mid+1, high, rightPos);
      this.tree[pos] = this.tree[leftPos] + this.tree[rightPos];
    }
  
    getTree(){
      return Array.from(this.tree);
    }
  
    getList(){
      return Array.from(this.list);
    }
  
  
    getRangeSum(QL = 0, QR = 0){
  
      if(QL > this.list.length - 1)
        return 0;
  
      if(QL === QR)
        return this.list[QL];
  
      const low = 0, high = this.list.length - 1;
      return this.getRangeSumHelper(low, high, QL, QR, 0);
    }
  
    getRangeSumHelper(low, high, QL, QR, pos){
      
      if(low >= QL && high <= QR){
        return this.tree[pos];
      }
      if( (QL > high) || (QR < low) ){
        return 0;
      }
  
      const mid = Math.floor((low+high)/2);
      const leftPos = 2*pos + 1;
      const rightPos = 2*pos + 2;
      const leftSum = this.getRangeSumHelper(low, mid, QL, QR,leftPos);
      const rightSum = this.getRangeSumHelper(mid+1, high, QL, QR,rightPos); 
      return leftSum + rightSum;
    }
  
  }
  
  
  const segTree = new SegmentTree([5,2,1,3,4,6,7,9,8,3]);
  console.log("Tree:",segTree.getTree())
  console.log("List:",segTree.getList())
  
  const rangeSum = segTree.getRangeSum(12,20)
  console.log("Range Sum :",rangeSum);
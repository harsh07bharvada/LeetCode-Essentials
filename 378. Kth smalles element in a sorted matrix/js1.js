function PriorityQueue (){
    collections = [];
    
    this.enqueue = function(priority){
        if(!collections.length){
            collections.push(priority);
        }else{
            let added = false;
            for(let i = 0;i< collections.length;i++){
                if(collections[i] > priority){
                    collections.splice(i,0,priority);
                    added = true;
                    break;
                }
            }
            if(!added){
                collections.push(priority);
            }
        }
    }
    
    this.dequeue = function(){
        if(collections.length)
            collections.pop();
    }
    
    this.size = function() {
        return collections.length;
    }
    
    this.print = function(){
        console.log(collections);
    }
    this.getQueue = function(){
        return collections;
    }
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
    let priorityQ = new PriorityQueue();
    
    for(let n of matrix){
        for(let e of n){
             priorityQ.enqueue(e);
            if(priorityQ.size() > k){
                priorityQ.dequeue();
            }
        }
      
    }
    
    const list = priorityQ.getQueue();
    return(list[list.length -1]);
    
};
function PriorityQueue (){
    collections = [];
    
    this.enqueue = function([key,priority]){
        if(!collections.length){
            collections.push([key,priority]);
        }else{
            let added = false;
            for(let i = 0;i< collections.length;i++){
                if(collections[i][1] < priority){
                    collections.splice(i,0,[key,priority]);
                    added = true;
                    break;
                }
            }
            if(!added){
                collections.push([key,priority]);
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let state = {};
    for(let n of nums){
        state[n] = state[n] +1 || 1;
    }
    let priorityQ = new PriorityQueue();
    
    Object.entries(state).forEach(([key,priority])=>{
       priorityQ.enqueue([key,priority]);
        if(priorityQ.size() > k){
            priorityQ.dequeue();
        }
    });
    
    const list = priorityQ.getQueue().map(v=>{
        return v[0];
    });
    
    
    return list;
    
};
var findOrder = function(numCourses, prerequisites) {
    
    let state = {}, inDegree = Array(numCourses).fill(0), queue = [], order = [];
    for(let [inEdge, outEdge] of prerequisites){
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }
    inDegree.forEach((v, index)=>{
        if(!v)
            queue.push(index);
    });
    while(queue.length > 0){
        const node = queue.shift();
        const children = state[node] || [];
        
        for(const child of children){
            inDegree[child]--;
            if(!inDegree[child]){
                queue.push(child);
            } 
        }
        order.push(node);
    }
    if(order.length !== numCourses){
        return [];
    }
    return order;
};
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let state = {}, inDegree = Array(numCourses).fill(0), queue = [], order = [];
    
    //Create the graph and calculate the inDegree of each node
    for(const [inEdge, outEdge] of prerequisites){
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }

    //Filter out nodes which do not have any dependency i.e no incoming edge
    inDegree.forEach((v,index)=>{
        if(!v)
            queue.push(index);
    });

    //Loop through all of the no dependency nodes
    while(queue.length){
        const node = queue.shift();
        const childs = state[node] ? state[node] : [];

        //After traversing the nodes update the inDegree of the childs and if inDegree is 0 then push to Queue
        for(let child of childs){
            inDegree[child]--;
            if(!inDegree[child]){
                queue.push(child);
            }
        }
        order.push(node);
    }
    return order.length === numCourses;
};
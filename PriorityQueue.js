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
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let state = {};
    for(let i=0;i< s.length;i++){
        
        if(state[s.charAt(i)]){
            state[s.charAt(i)].push(i);
        }else{
            state[s.charAt(i)] = [i];
        }
    }
    let once = Object.entries(state).filter(([key,value])=>{
        if(value.length === 1)
            return true;
        return false;
    });
    
    if(once.length>0){
        once.sort((a,b)=>a[1][0] - b[1][0] );
        return once[0][1][0];
    }else{
        return -1;
    }   
};
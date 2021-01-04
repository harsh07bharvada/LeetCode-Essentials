/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");
    const state = {};
    if(pattern.length !== s.length)
        return false;
    for(let i=0;i<pattern.length;i++){
        if(!state[pattern[i]]){
            if(Object.values(state).includes(s[i]))
                return false;
            state[pattern[i]] = s[i];
        }else if( state[pattern[i]] !== s[i] ){
            return false;
        }
    }
    return true;
    
};
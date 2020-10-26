/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    let strLen = s.length - 1;
    const sState = {};
    while(strLen >= 0){
        const sValue = s.charAt(strLen);
        const tValue = t.charAt(strLen);
        if(sState[sValue]){
            sState[sValue]++;
        }else{
            sState[sValue] = 1;
        }
        if(sState[tValue]){
            sState[tValue]--;
        }else{
            sState[tValue] = -1;
        }
        strLen--;
    }
    const index = Object.values(sState).findIndex(v=>v !== 0);
    if(index !== -1)
        return false;
    return true
};
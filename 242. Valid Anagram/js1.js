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
    const tState = {};
    while(strLen >= 0){
        const sValue = s.charAt(strLen);
        const tValue = t.charAt(strLen);
        if(sState[sValue]){
            sState[sValue]++;
        }else{
            sState[sValue] = 1;
        }
        if(tState[tValue]){
            tState[tValue]++;
        }else{
            tState[tValue] = 1;
        }
        strLen--;
    }
    const entriesS = Object.entries(sState);
    const entriesT = Object.entries(tState);  
    if(entriesS.length !== entriesT.length)
        return false; 
    for(let i=0;i< entriesS.length;i++){
        const [key,value] = entriesS[i];
        if( tState[key]  !== value)
            return false;
    }
    return true;
};
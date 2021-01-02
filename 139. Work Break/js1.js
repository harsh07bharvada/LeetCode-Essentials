var wordBreak = function(s, wordDict) {
    const dp = {};
    const cut = str =>{
        if(str==="")
            return true;
        if(dp[str] === false){
            return false;
        }
        for(let i=0;i<wordDict.length;i++){
            const v = wordDict[i];
            if(str.indexOf(v) === 0){
                if(cut(str.slice(v.length)))
                    return true;
            }
        }
        dp[str] = false;
        return false;
    }
    return cut(s);
};
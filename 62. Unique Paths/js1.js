/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let count = 0;
    let dp = {};
    const traverse = (x,y,count) =>{
        if(dp[x+"-"+y]){
            return dp[x+"-"+y];
        }else{
            let left = 0,right = 0;
            if(x === m-1 && y === n-1){
                return count + 1;
            }else{
                if(x+1 < m){
                    left = traverse(x+1,y,count);
                }
                if(y+1 < n){
                    right = traverse(x,y+1,count);
                }
                dp[x+"-"+y] = left+right;
                return left +right;
            }
        }
        
    }
    
    traverse(0,0,0);
    console.log(dp["0-0"]);
    return dp["0-0"] ? dp["0-0"] :1
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let dp = {};
    const traverse = (x, y, word)=>{
        if(!word)
            return true;
        else{
            if(dp[x+"_"+y+"_"+word]){
                return dp[x+"_"+y+"_"+word];
            }
            const c = word.charAt(0);
            let copy = board[x][y];
            board[x][y] = false;
            let upRes, downRes, leftRes, rightRes;
            if(x - 1 >= 0 && board[x-1][y] === c){
                upRes = traverse( x - 1, y , word.substring(1));
            }
            if(x + 1 < board.length && board[x+1][y] === c){
                downRes = traverse( x + 1, y , word.substring(1));
            }
            if(y - 1 >= 0 && board[x][y-1] === c){
                leftRes = traverse( x, y -1 , word.substring(1));
            }
            if(y + 1 < board[x].length && board[x][y+1] === c){
                rightRes = traverse( x, y + 1 , word.substring(1));
            }
            board[x][y]=copy;
            
            if(upRes || downRes || leftRes || rightRes){
                dp[x+"_"+y+"_"+word] = true;
                return true;
            }else{
                dp[x+"_"+y+"_"+word] = false;
                return false
            }
                
        }
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] === word.charAt(0)){
                if(traverse(i,j, word.substring(1))){
                   return true;
                }
            }
        }

    }
    return false;
    
};
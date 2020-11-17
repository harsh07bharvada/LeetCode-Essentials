/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
    for(let i =0;i< board.length;i++){
        for(let j=0;j<board[i].length;j++){
            
            
            let liveCount = 0;
            
            if( j + 1 < board[i].length && (board[i][j + 1] === 1 || board[i][j + 1] === false)){
                liveCount++;
            }
            if( j - 1 >= 0 && (board[i][j - 1] === 1 || board[i][j - 1] === false)){
                liveCount++;
            }
            if( i+1 < board.length && (board[i + 1][j] === 1 || board[i + 1][j] === false)){
                liveCount++;
            }
            if( i -1 >= 0 && (board[i - 1][j] === 1 || board[i - 1][j] === false)){
                liveCount++;
            }
            if( (i+1 < board.length && j+1 < board[i].length ) && (board[i + 1][j + 1] === 1 || board[i + 1][j + 1] === false)){
                liveCount++;
            }
            if( ( i+1 < board.length && j-1 >=0 ) && (board[i + 1][j - 1] === 1 || board[i + 1][j - 1] === false)){
                liveCount++;
            }
             if( ( i-1 >= 0 && j+1 < board[i].length ) && (board[i - 1][j + 1] === 1 || board[i - 1][j + 1] === false)){
                liveCount++;
            }
             if( ( i-1 >= 0 && j-1 >=0 ) && (board[i - 1][j - 1] === 1 || board[i - 1][j - 1] === false)){
                liveCount++;
            }
            if(board[i][j] && (liveCount < 2 || liveCount > 3)){
                board[i][j] = false;
            }
            else if(!board[i][j] && liveCount === 3){
                board[i][j] = true;
            }
            
        }
    }
    
};
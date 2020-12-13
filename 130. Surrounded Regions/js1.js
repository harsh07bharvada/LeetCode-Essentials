/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length === 0)
        return board;
    
    const traverse = (i,j)=>{
   
        if(board[i][j] === 'X' || board[i][j] ==='@')
            return;
        else{
             board[i][j] = '@';
            if(j-1>=0){
                traverse(i,j-1);
            }
            if(j+1<board[0].length){
                traverse(i,j+1);
            }
            if(i-1>=0 ){
                traverse(i-1,j);
            }
            if(i+1 < board.length){
                traverse(i+1,j);
            }
  
        }
    }
    
    for(let i=0;i<board[0].length;i++){
        if(board[0][i] === 'O')
            traverse(0,i);
        if(board[board.length-1][i] === 'O')
            traverse(board.length-1,i);   
    }
    for(let j=1;j<board.length-1;j++){
        if(board[j][0] === 'O')
            traverse(j,0);
        if(board[j][board[0].length-1] === 'O')
            traverse(j,board[0].length-1);
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X';
            }
            if(board[i][j] === '@'){
                board[i][j] = 'O';
            }
        }
    }

};
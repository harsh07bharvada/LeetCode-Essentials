/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let rows = Array(9).fill(0).map(v=>Array(9).fill(false));
    let cols = Array(9).fill(0).map(v=>Array(9).fill(false));
    let quadrants = Array(9).fill(0).map(v=>Array(9).fill(false));
    
    const getQuadrants = (i,j)=>{

        if([0,1,2].includes(i) && [0,1,2].includes(j))
            return 0;
        if([0,1,2].includes(i) && [3,4,5].includes(j))
            return 1;
        if([0,1,2].includes(i) && [6,7,8].includes(j))
            return 2;
        if([3,4,5].includes(i) && [0,1,2].includes(j))
            return 3;
        if([3,4,5].includes(i) && [3,4,5].includes(j))
            return 4;
        if([3,4,5].includes(i) && [6,7,8].includes(j))
            return 5;
        if([6,7,8].includes(i) && [0,1,2].includes(j))
            return 6;
        if([6,7,8].includes(i) && [3,4,5].includes(j))
            return 7;
        if([6,7,8].includes(i) && [6,7,8].includes(j))
            return 8;
    }
    
    for(let i=0;i< board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j] !== "."){
                
                const num = Number(board[i][j]) - 1;
                const q = getQuadrants(i,j);
                if(rows[i][num] || cols[j][num] || quadrants[q][num])
                    return false;
                rows[i][num] = true;
                cols[j][num] = true;
                quadrants[q][num] = true;
                
            }
        }
    }
    return true;
    
    
};
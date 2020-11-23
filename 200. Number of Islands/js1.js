/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const traverse=(x, y)=>{

        if(x<0 || y<0 || x>= grid.length || y>= grid[0].length || grid[x][y] ==="0")
            return 0;
        grid[x][y] = "0";
        traverse(x-1,y);
        traverse(x+1,y);
        traverse(x,y-1);
        traverse(x,y+1); 
        return 1;
    }
    
    for(let i=0;i<grid.length;i++){  
        for(let j=0;j<grid[i].length;j++){
            count+= traverse(i,j)               
        }
    }
    return count
    
};
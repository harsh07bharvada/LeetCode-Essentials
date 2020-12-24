/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length <= 0) return false;
    let i = 0, j = matrix[0].length-1;
    
    while(j >=0 && i< matrix.length){
        if(matrix[i][j] === target)
            return true;
        if(matrix[i][j] > target)
            j--;
        else
            i++;
    }
    return false;
};
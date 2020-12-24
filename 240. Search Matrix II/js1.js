/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const binarySearch = (index)=>{
        
        let low = 0, high  = matrix[index].length - 1;
        while(low <= high){
            const mid = Math.floor((high + low)/2);
            //console.log("low",matrix[index][low],"high",matrix[index][high],"mid",matrix[index][mid])
            if(matrix[index][mid] === target)
                return true;
            else if(matrix[index][mid] > target )
                high = mid - 1;
            else
                low = mid + 1;
        }
        return false;
    }
    let rows = matrix.length, cols = matrix[0].length-1;
    for(let i=0;i<rows;i++){
        if(matrix[i][cols] < target)
            continue;
        if(binarySearch(i)){
            return true;
        }
    }
    return false;
};
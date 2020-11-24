/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    //Check if First Row or Column has a 0 or not
    const isFirst = !matrix[0][0];
    const isRow = matrix[0].includes(0);
    const isCol = matrix.map(v=>v[0]).includes(0);


    //If 0 present project it upwards
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(!matrix[i][j]){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    //Set all the Rows with 0 from projection
    for(let i=1;i<matrix.length;i++){
        if(!matrix[i][0])
            matrix[i] = Array(matrix[0].length).fill(0);
    }

    //Set all the Columns with 0 from projection
    for(let i=1;i<matrix[0].length;i++){
        if(!matrix[0][i]){
            for(let j=0;j<matrix.length;j++){
                matrix[j][i] = 0;
            }
        }
    }

    //If 0,0 is 0 from before then set both first Row and first Column to 0 else set each
    if(isFirst){
        for(let i=0;i<matrix.length;i++)
            matrix[i][0] = 0;
        matrix[0] = Array(matrix[0].length).fill(0);
    }else{
        
        if(isRow)
            matrix[0] = Array(matrix[0].length).fill(0);
        if(isCol){
             for(let i=0;i<matrix.length;i++)
                matrix[i][0] = 0;
        }
    }
    
};
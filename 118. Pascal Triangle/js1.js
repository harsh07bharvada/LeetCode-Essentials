/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 0;i<numRows;i++){
        let eachRow = [];
        for(let j=0;j<=i;j++){
            if(j==0 || j ==i){
                eachRow.push(1);
            }
            else{
               eachRow.push(res[i-1][j] + res[i-1][j-1]);
            }
        }
        res.push(eachRow);
    }
    return res;
};
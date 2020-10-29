/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const nums = [0,1,2,3,4,5,6,7,8,9];
    const getDigits = n => n.toString().split("").map(v=>Number(v));
    
    do{
        const digits = getDigits(n);
        const sum = digits.reduce((acc,v)=>{
            acc+= (v*v);
            return acc;
        },0);
        n = sum;
        
    }while(!nums.includes(n))
    
    //1 and 7 are happy numbers within 1-9
    if(n === 1 || n===7){
        return true;
    }
    return false;
    
    
};
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i=0;i<flowerbed.length;i++){
        if(n === 0)
            return true;
        if(!flowerbed[i]){
            let prev = false, next = false;
            if(i-1 >=0 && !flowerbed[i-1]){
                prev = true;
            }else if(i==0){
                prev = true;
            }
            
            if(i+1 < flowerbed.length && !flowerbed[i+1]){
                next = true;
            }else if(i == flowerbed.length - 1){
                next = true;
            }
            
            if(prev && next){
                n--;
                flowerbed[i] = 1;
            }
        }
    }
    
    return n=== 0;
    
};
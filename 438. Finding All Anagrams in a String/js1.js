/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    const pCount = Array(26).fill(0);
    for(let i=0;i<p.length;i++){
        pCount[p.charCodeAt(i) - 97]++;
    }
    console.log(pCount)
    for(let i=0;i<= s.length - p.length ;i++){
        
        const sCount = Array(26).fill(0);
        for(let j=i;j<i+p.length;j++){
            sCount[s.charCodeAt(j) - 97]++;
        }
        if(sCount.join('') === pCount.join(''))
            res.push(i);
    }
    return res;
    
};
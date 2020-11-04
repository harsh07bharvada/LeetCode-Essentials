/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const tst = /^[0-9a-zA-Z]+$/;
    
    const list = s.split("").filter(v=> v.match(tst));
    if(list.join("").toLowerCase() === list.reverse().join("").toLowerCase())
        return true;
    else
        return false;
    
    
};
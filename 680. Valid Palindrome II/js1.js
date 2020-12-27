/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    const isPalindrome = (left,right) =>{
        //console.log(left,right)
        while(left<right){
            if(s.charAt(left) !== s.charAt(right)){
                return false;
            }
            left++;right--;
        }
        return true;
    }
    
    let left = 0, right = s.length -1;
    
    while(left<right){
        //console.log("main left:",left,"right:",right)
        if(s.charAt(left) === s.charAt(right)){
            left++;right--;
        }else{
            return isPalindrome(left+1,right) || isPalindrome(left, right-1);
        }
    }
    return true;
    
};
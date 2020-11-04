/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let slow = head, fast = head,r = 0, l = 0, left = head, mid = 0, len = 0,slowCount = 0;
    
    //Get len of list
    while(fast){
        fast = fast.next;
        len++;
    }
    if(len == 0 || len === 1)
        return true
    r = Math.floor(len/2);
    
    //check if odd or even and get middle node
    if(len %2 ===0){
        slowCount = len/2 -1;
    }else{
        slowCount = Math.floor(len/2);
    }
    
    //reach middle node
    while(slowCount){
        slow = slow.next;
        slowCount--;
    }
    
    //check between two nodes
    mid = r;
    while(l < mid){
        let tempR = r, tempRight = slow;
        
        while(tempR){
            tempRight = tempRight.next;
            tempR--;
        }
        if(tempRight.val !== left.val)
            return false;
        
        r--;
        l++;
        left = left.next;
    }
    
    return true
    
    
    
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let hA = headA, hB = headB, countA = 0, countB = 0;
    //count len of first
    while(hA){
        countA++;
        hA = hA.next;
    }
    //count len of second
    while(hB){
        countB++;
        hB = hB.next;
    }

    let smallHead = null, bigHead = null,diff = 0, cur = null;
    
    //find the bigger & smaller linkedlist and calculate the diff
    if(countA <= countB){
        smallHead = headA;
        bigHead = headB;
        diff = countB - countA;
    }else{
        smallHead = headB;
        bigHead = headA;
        diff = countA - countB;
    }

    // get bigger linked list to equal len of smaller list
    while(diff > 0){
        bigHead = bigHead.next;
        diff--;
    }
    
    //Go until we find same
    while(bigHead && smallHead && smallHead !== bigHead){
        bigHead = bigHead.next;
        smallHead = smallHead.next;
    }
    
    if(smallHead)
        return smallHead;
    else if(bigHead)
        return bigHead;
    return null;
    
};
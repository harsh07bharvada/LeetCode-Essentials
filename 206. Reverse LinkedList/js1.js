/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head){
        let cur = head; 
        let set = null;
        let nextNodeAdd = cur.next; 
        while(cur){
            let tempCur = cur;

            /** Set the next of'Current' to previous */
            cur.next = set; 

            /** Set the previous to 'Current */
            set = tempCur; 

            /** Set the 'Current' to next */
            cur = nextNodeAdd;

            /** If next of next present then assign */
            if(nextNodeAdd){
                nextNodeAdd = nextNodeAdd.next;

            }
        }
        return set;
    }
    return head;
    
    
    
};
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
var oddEvenList = function(head) {
    
    let counter = 1, odd = null, even = null,oddHead = null,evenHead = null, cur = head;
     
     while(cur){
         if(counter % 2===0){
             if(even){
                 even.next = cur;
                 even = even.next;
             }else{
                 even = cur;
                 evenHead = even;
             }
         }else{
             if(odd){
                 odd.next = cur;
                 odd = odd.next;
             }else{
                 odd = cur;
                 oddHead = cur;
             }
         }
         cur = cur.next;
         counter++;
     }
      if(odd){
          odd.next = evenHead;
          if(even){
             even.next = null;    
          }
          
         
      }
     return oddHead;
 };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let curr1 = l1;
    let curr2 = l2;
    let totalList = [];
    while(curr1)
    {
        totalList = [...totalList, curr1];
        curr1 = curr1.next;
    }
    while(curr2)
    {
        totalList = [...totalList, curr2];
        curr2 = curr2.next;
    }
    totalList.sort((first,second) =>{
        if(first.val<second.val)
            return -1;
        else if(first.val>second.val)
            return 1;
        else
            return 0;
            
    });
    console.log(totalList);
    const newList = totalList.map((node,index)=>{
        if(index+1< totalList.length)
        {
            node.next = totalList[index+1];
        }
        else
        {
            node.next = null;
        }
        return node;
    });
    console.log(newList);
    if(newList.length == 0)
        return null;
    else return newList[0];
};
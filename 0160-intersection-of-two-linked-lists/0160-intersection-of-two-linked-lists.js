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

//  // TC = O(m+n), SP = o(1)
var getIntersectionNode = function(headA, headB) {

    if (headA === null || headB === null) {
        return null;
    }

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {

        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }

        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }

    return p1;
};




 
//  // TC = O(m+n), SP = o(n)
// var getIntersectionNode = function(headA, headB) {
//     let set = new Set();

//     while(headA != null){
//         set.add(headA);
//         headA = headA.next;
//     }

//     while(headB != null){
//         if(set.has(headB)){
//             return headB;
//         }
//         headB = headB.next;
//     }
//     return null;
// };
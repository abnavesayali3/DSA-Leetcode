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
// var isPalindrome = function(head) {
    
//     // let head = null; => if is not given

//     let temp = head;
//     let arr = [];
//     while(temp != null){

//         arr.push(temp.val);
//         temp = temp.next;
//     }

//     let l = 0;
//     let r = arr.length - 1;
//     while(l < r){
//         if(arr[l] != arr[r]){
//             return false;
//         }
//         l++;
//         r--;
//     }

//     return true;
    
// };


// this is the optimize solutio 
var isPalindrome = function(head) {

    // 1. Find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let prev = null;

    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // 3. Compare
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
};

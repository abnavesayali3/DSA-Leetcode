/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {

     let left = 0;
     let right = s.length - 1;

     while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
     }
     return s;
};





// var reverseString = function(s) {
//     let n = s.length;
//     let j = n-1;
//     for(let i=0; i<n/2; i++){

//         let temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//         j--;
//     }
//     return s;
// };
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// 1. Convert string → array
// 2. Take groups of 2k characters
// 3. Reverse first k characters of each group
// 4. Convert array → string



var reverseStr = function(s, k) {
    
    let arr = s.split("");
    for(let start = 0; start < arr.length; start = start + 2 * k){

        let i = start;
        let j = Math.min(start + k - 1, arr.length);

        while(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return arr.join("");
};
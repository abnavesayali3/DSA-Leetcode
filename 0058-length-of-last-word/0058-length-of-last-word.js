/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
     let count = 0;
     let len = s.length - 1;

     while(len >= 0 && s[len] === ' ')
        len--;

    while(len >= 0 && s[len] !== ' '){

        count++;
        len--;
    }

    return count;
};
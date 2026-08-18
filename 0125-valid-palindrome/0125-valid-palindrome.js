/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // Convert the string to lowercase
    s = s.toLowerCase();

    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        // If left character is not a letter or number, skip it
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }

        // If right character is not a letter or number, skip it
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }

        // If both characters are equal, move both pointers
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }

        // Characters are different
        else {
            return false;
        }
    }

    return true;
};
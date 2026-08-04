/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
     let rev = 0;
    let original = n;
    n = Math.abs(n);
    while (n > 0) {
        last = n % 10;
        rev = (10 * rev) + last;
        n = Math.floor(n / 10);
    }

    let limit = Math.pow(2, 31); // For 32 bit caese 
    if (rev < -limit || rev > limit) {
        return 0;
    }
    if (original < 0) {
        return -rev;
    }
    else {
        return rev;
    }
};
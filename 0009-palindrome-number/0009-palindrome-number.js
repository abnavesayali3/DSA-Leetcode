/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(n) {

      if (n < 0) {
        return false;
    }
    
    let original = n;
    let rev = 0;

    while(n > 0){
        let rem = n % 10 ;
        rev = (rev * 10 ) +  rem;
        n =  Math.floor(n / 10);
    }

    if(original == rev) 
        return true;
    else
        return false;

};
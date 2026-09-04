/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = {};

    for(let i = 0; i < strs.length; i++){

            let sorted_str = strs[i].split("").sort().join("");

            if(!map[sorted_str])

                map[sorted_str] = [strs[i]];

            else

                map[sorted_str].push(strs[i]);

            
    }

    return Object.values(map);
};
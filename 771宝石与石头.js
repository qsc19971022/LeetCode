/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const set = new Set(jewels.split(''));
    let res = 0;
    for(const s of stones) {
        if(set.has(s)){
            res++;
        }
    }
    return res;

};


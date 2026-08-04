/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let buyPrice = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++){

        let curProfit = prices[i] - buyPrice;
        if(curProfit > maxProfit)
        {
            maxProfit = curProfit;
        }

        if(prices[i] < buyPrice){

            buyPrice = prices[i];
        }
    }

    return maxProfit;
};
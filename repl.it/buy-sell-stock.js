//Say you have an array for which the ith element is the price of a given stock on day i.
//If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// function findMaxProfit (arr){
//   var maxProfit = 0;
//   var profit = 0;
//   var len = arr.length;
//     //i is the price we buy. 
//   for (var i = 0; i < len; i++){
//     for(var j = 1; j < len; j++){
//         //if price on the next day (sell value) is less than the buy value, then move on and check the price on the day after that. If sell value is more than buy value, then calculate profit = sell - buy. 
//       if(arr[j] < arr[i]){
//         j++;
//       }else{
//        profit = arr[j] - arr[i];
//       }
//     }
//       //if maxProfit is less than profit, then return maxProfit. Otherwise, assign maxProfit = profit.
//     if(maxProfit < profit){
//          maxProfit = profit;
//       }
//   }
//   return maxProfit;
// }
// findMaxProfit ([8, 6, 5, 8]);

function maxProfit (prices) {
  //initialize profit and min price
  let profit = 0;
  let min = prices[0];
  //loop through the array prices, and compare each price with min price. Assign a new min value if price < min. 
  for (let price of prices) {
      if (price < min){min = price;}
      //if price is more than min value, we calculate current profit = price - min. If current profit is more than the initial profit, assign profit = current profit
      else if (price - min > profit){ profit = price - min;}
  }
  return profit;
};
maxProfit([8,6,4,8]);
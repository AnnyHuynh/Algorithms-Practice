//https://leetcode.com/discuss/interview-question/1002811/Amazon-or-OA-20201-or-Fresh-Promotion

function isWinning(codeList, shoppingCart) {
  if(codeList == null || codeList.length == 0) return 1;
  if(shoppingCart == null || shoppingCart.length == 0) return 0;
  
  let i = 0; let j = 0;
  
  while(i < codeList.length && i + codeList[i].length < shoppingCart.length){
      let match = true;
      
      for(let k = 0; k < codeList[i].length; k++){
          if(codeList[i][k] !== shoppingCart[j + k] && codeList[i][k] !== "anything") {
              match = false;
              break;
          }
      }
      
      if(match){
          j += codeList[i].length;
          i++;
      }else{
          j++;
      }  
  }
  
  return i == codeList.length ? 1 : 0;
}

const codeList1 = [['apple', 'apple'], ['banana', 'anything', 'banana']];
const shoppingCart1 = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];
const codeList2 = [['apple', 'apple'], ['banana', 'anything', 'banana']];
const shoppingCart2 = ['banana', 'orange', 'banana', 'apple', 'apple'];
const codeList3 = [['apple', 'apple'], ['banana', 'anything', 'banana']];
const shoppingCart3 = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana'];

// console.log(isWinning(codeList1, shoppingCart1));
isWinning(codeList2, shoppingCart2);
// console.log(isWinning(codeList3, shoppingCart3));
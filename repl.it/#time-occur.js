//Write a function that finds how many times each letter or alphabet occur. 
var arr1 = ['a', 'abba', 'cab']
//Output should be {'a':4, 'b':3, 'c':1};
function findOccur (arr1){
  const map = {};
  const arr2 = arr1.join('').split('');
  console.log(arr2);
  for (var j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      map[arr2[j]] += 1;
    }else{
      map[arr2[j]] =1
    }
  }
    return map;
}
findOccur(arr1);
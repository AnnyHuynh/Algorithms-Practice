//Find Second Maximum Value in an Array

function secondMax(arr){
  let len = arr.length;
  let firstMax = 0;
  let secondMax = 0;
  if(len <= 1)return;
  for(let i = 0; i < len; i++){
    if(arr[i] > firstMax){
      secondMax = firstMax;
      firstMax = arr[i];
    }else if(arr[i] < firstMax && arr[i] > secondMax){
      secondMax = arr[i];
    }else{
      i++;
    }
  }
  return secondMax;
};
console.log(secondMax([0, 4, 2, 4, 8]));
console.log(secondMax([0]));
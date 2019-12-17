function sortColor(arr){
  let start = 0;
  let i = 0;
  let end = arr.length - 1;

  while(i <= end && start < end){
    if(arr[i] === 0){
      arr[i] = arr[start];
      arr[start] = 0;
      start++;
      i++;
    }else if(arr[i] === 2){
      arr[i] = arr[end];
      arr[end] = 2;
      end--;
    }else{
      i++;
    }
  }
  return arr;
}
console.log(sortColor([2, 0, 2, 1, 1, 0]));
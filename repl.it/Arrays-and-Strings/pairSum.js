//https://www.hackerrank.com/contests/hourrank-26/challenges/pair-sums/problem

const getProductPairs = (i, arr) => {
  return arr.slice(i + 1).map(item => {
    return item * arr[i];
  })
}

const pairSum = (arr) => {
  const hash = {};

  if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0]; 

  for (let i = 0; i < arr.length; i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = getProductPairs(i, arr);
    }else{
      continue;
    }
  }

  const values =  Object.values(hash);


  return [].concat(...values).reduce((acc, item) => {
    return acc + item;
  }, 0);
};

console.log(pairSum([7, 2, -1, 2]));
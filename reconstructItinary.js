//This problem was asked by Facebook. (Daily problem#41)
//Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
//For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
//Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.
//Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.
function findItinerary(arr, t){
  let result = [];
  let resLen = result.length;
  let arr2 = [];
  let len = arr.length;
  let i = 0;
  let j = 0;
  if(len === 0 || t === 0) return null;

  while(i < len && resLen === 0){
    let element = arr[i];
    if(element[0] === t){
      result.push(element[0]);
      result.push(element[1]);
      arr2 = arr.splice(i, 1);
    }else{
      i++;
    }
  }
  while(j < arr2.length){
    if(arr2[j][0] === result[resLen - 1]){
      result.push(arr2[j][1]);
      arr2.splice(j, 1);
    }else{
      j++;
    }
  }
  console.log(result);
  return result = result > 2 ? result : null;
}
console.log(findItinerary([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']], 'YUL'));
console.log(findItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM'));
console.log(findItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']] , 'A'));
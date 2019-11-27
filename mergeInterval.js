//Given a collection of intervals, merge all overlapping intervals.
//Input: [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
function mergeInterval(intervals){
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for(let i = 0; i < intervals.length; i++){
    if(i == 0 || intervals[i][0] > result[result.length - 1][1]) result.push(intervals[i]);
    else
    result[result.length-1][1] = Math.max(intervals[i][1],result[result.length-1][1])
  }
return result;
}
console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]));
//Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
//You may assume that the intervals were initially sorted according to their start times.
//Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
//Output: [[1,5],[6,9]]
function insertInterval(intervals, newInterval){
  let len = intervals.length;
  let i = 0;
  let result = [];
  if(len === 0) result.push(newInterval);

  while(i < len && intervals[i][1] < newInterval[0]){
    result.push(intervals[i]);
    i++;
  }
  
  if(i == len)result.push(newInterval);

  while(i < len && intervals[i][0] <= newInterval[1]){
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  while(i < len){
    result.push(intervals[i]);
    i++;
  }
  return result;
}
console.log(insertInterval([[1,3],[6,9]], [2,5]))
console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
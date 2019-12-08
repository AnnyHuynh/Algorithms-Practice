//This problem was asked by Facebook. (Daily problem#41)
//Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
//For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
//Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.
//Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.

var findItinerary = function(tickets, t) {
  let result=[];
  let map={};
  tickets.forEach((singleTicket) =>{
      if(map[singleTicket[0]] == undefined){
          map[singleTicket[0]] = [];
      }
      map[singleTicket[0]].push(singleTicket[1]);
  })
  Object.entries(map).forEach((singlePro) => {
      singlePro[1].sort();
  })
  console.log(map);
  const getItineray = (from) => {
      const tos= map[from];
      while(tos && tos.length>0){
          getItineray(tos.shift());
      }
      result.unshift(from);
  }
  getItineray(t);
  return result = result > 2 ? result : null;
};

console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]], "JFK"));
console.log(findItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM'));
console.log(findItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']] , 'A'));
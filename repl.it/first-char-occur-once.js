//Given a stream of characters, find the first character that occurs only once. 
var s = [1,2,5,2,1,2,1,6];

//  var firstUniqChar = function(s) {
//     for(i=0; i<s.length; i++)
//         if(s.indexOf(s[i])===s.lastIndexOf(s[i])) 
//         return s[i];
//     return -1
// };
// firstUniqChar(s);

var firstUniqChar = function(s) {
  var res = [], objChar = {};
  var len = s.length;
    // storage
    for(i=0; i< len; i++){
      objChar[s[i]] = ++objChar[s[i]] || 1;
      if(objChar[s[i]] === 1) res.push(s[i]);
    }
    console.log(res);
    let len2 = res.length;
    // lookup
    for (var j = 0; j < len2; j++){
      if (objChar[res[j]] === 1){
          return res[j];
      }
    }
    return res[j];
};
firstUniqChar(s);
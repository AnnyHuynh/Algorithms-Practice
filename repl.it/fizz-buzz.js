//Write a program or script that prints out the numbers between 1 to 100. 
// For each number that is divisible by three, print "Fizz"; by five then print "buzz". For each number that is devisible by both three & five, print "FizzBuzz".
//if else || ternary || Hash Table

// function fizzBuzz (n){
//   var arr = [];
//   for (var i = 1; i <= n; i++){
//     if (i % 15 === 0){
//        arr.push("FizzBuzz");
//     }else if(i % 3 === 0){
//        arr.push("Fizz");
//     }else if (i % 5 === 0){
//        arr.push("buzz");
//     }else{
//        arr.push(i);
//     }
//   }
//   return arr;
// }
// fizzBuzz(100);

// function fizzBuzz(n){
//   var arr = [];
//   for (var i = 1; i <= n; i++){
//     i % 3 == 0 ? (i%5 == 0 ? arr.push("fizzBuzz") : arr.push("fizz")) : (i % 5 == 0? arr.push("buzz") : arr.push(i))
//   }
//   return arr;
// }
// fizzBuzz(100);

// function fizzBuzz(n){
//   var map = {};
//   for (var i = 1; i <= n; i++){
//     if(i % 15 == 0){
//       map[i] = "fizzBuzz";
//     }else if (i % 3 == 0){
//       map[i] = "fizz"
//     }else if (i % 5 == 0){
//       map[i] = "buzz"
//     }else{
//       map[i] = i;
//     }
//   }
//   console.log(map);
//   return Object.values(map);
// }

// fizzBuzz(10);

//Print on a string:

//  function fizzBuzz(n){
//    var res = "";
//    for (var i = 1; i <= n; i++){
//        if(i % 15 == 0){
//          res += " fizzBuzz";
//        }
//        if (i % 3 == 0){
//          res += " fizz";
//        }
//        if (i % 5 == 0){
//          res += " buzz";
//        }
//    }
//    return res.trim();
//  }
//console.log(fizzBuzz("20"));

//Print on separate line:

 function fizzBuzz(n){
  var str = "";
  for (var i = 1; i <= n; i++){
      if(i % 15 == 0){
        str += "\n" + "fizzbuzz"
      }
      if (i % 3 == 0){
        str += "\n" + "fizz"
      }
      if (i % 5 == 0){
        str += "\n" + "buzz"
      }
  }
return str;
}

console.log(fizzBuzz("20"));




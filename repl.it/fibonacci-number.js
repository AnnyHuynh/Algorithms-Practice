// write a method fib() that takes an integer n and returns the nth Fibonacci number. 
//recursive (O(2^n)) || memoized O(n) || bottom-up O(n)

//bottom-up: 
var fib = function(N) {
  fib = {}; 
  if(N <= 2)return 1;
  fib[1] = 1;
  fib[2] = 1;
  for (var i = 3; i <= N; i++){
  if(fib[i]){
    return fib[i];
  } else{
    fib[i] = fib[i - 1] + fib[i-2];
  }
  }
    return fib[N];
};
console.log(fib(3));

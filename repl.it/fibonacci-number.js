// write a method fib() that takes an integer n and returns the nth Fibonacci number. 
//recursive (O(2^n)) || memoized O(n) || bottom-up O(n)

//Recursive
function fib(n) {
  if (n <= 1)
      return n;
  return fib(n-1) + fib(n-2);
}

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
// Time Complexity:O(n) 
// Extra Space: O(n)

//Or

function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}

// Time Complexity:O(n) 
// Extra Space: O(1)

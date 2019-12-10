//implement queue using stacks. 
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.inp=new Array();/*For Push*/
  this.out=new Array();/*For Peek/Pop */
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.inp.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  this.peek();/* if output stack is empty fill it with input stack*/
  return this.out.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  /* if output stack is empty fill it with input stack*/
  if(this.out.length<=0){
      while(this.inp.length>0)
          this.out.push(this.inp.pop());
  }
  return this.out[this.out.length-1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.inp.length<=0&&this.out.length<=0;
};

/** 
* Your MyQueue object will be instantiated and called as such:*/
var obj = new MyQueue()
obj.push("x")
//  var param_2 = obj.pop()
//  var param_3 = obj.peek()
//  var param_4 = obj.empty()
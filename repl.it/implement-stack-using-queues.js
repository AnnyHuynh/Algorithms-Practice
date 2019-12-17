//Leetcode: https://leetcode.com/problems/implement-stack-using-queues/
//Implement the following operations of a stack using queues.
//push(x) -- Push element x onto stack.
//pop() -- Removes the element on top of the stack.
//top() -- Get the top element.
//empty() -- Return whether the stack is empty.

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  //use 2 queues to implement.
    this.in = [];
    this.out = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.in.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.in.length > 1){
      this.out.push(this.in.shift());
    }
    //after done with the while loop, there's one element left in this.in -> shift the last element mean pop. 
    var temp = this.in.shift();
    //swap this.in and this.out
    [this.in, this.out] = [this.out, this.in];

    return temp;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.in.length > 0){
      return this.in[this.in.length-1];
    }else{
      return null;
    }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.in.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
 var obj = new MyStack()
 obj.push(1);
 obj.push(2);
 obj.push(3);
 console.log(obj);
 var param_2 = obj.pop();
 console.log(param_2);
 var param_3 = obj.top()
 console.log(param_3);
 var param_4 = obj.empty()
 console.log(param_4);
// Reverse a singly Linked List

// Iterative || recursion

//Iterative Solution:

function reverseListIter (head){
  if(!head || !head.next) return head;
  let current = this.head;
  let prev = null;
  let next = current.next;
  
  while(current){
    // point the head.next to null
    current.next = prev;
    // traversal and move prev to become head
    prev = current;
    // move head to become next
    current = next;
    // so now we have prev current next 
    
  }
  //after traversal through the list, prev is the last item. return prev. 
  return prev;
}

//Recursive Solution:

function reverseListRecur (head){
  if(!head || !head.next) return head;
  
  //tail is now become head
  
  var tail = reverseListRecur(head.next);
  
  //second item will point to head
  
  head.next.next = head; 
  
  // head is now tail, so it's pointing to null.
  
  head.next = null;
  
  //return the last item of the list. 
  
  return tail;
  
}
// Reverse a Doubly Linked List

//null prev 1 next  prev 2 next  prev 3 next null

function reverseList (head){
  
  // if head is null or only one item, return head.
  if(!head || !head.next) return head;
  
  let current = this.head;
  let next = current.next;
  
  while(current){
    // change the next pointer to null
    current.next = current.prev;
    //change the prev pointer to next
    current.prev = next;
    //move current to become next
    current = next;
  }
  //after done, last item is current which becomes head;
   head = current;

  return head;
  
}
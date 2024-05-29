/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
	  let nd = new Node();
	  
	  if (!this.first){
		  this.first = nd;
		  this.last = nd;
	  } else {
		  let tm = this.first;
		  this.first = nd;
		  this.first.next = tm;
	  }
	this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
	if (!this.first) throw new Error("Stack is empty.  Cannot pop.");
	
	let tm = this.first;
	
	if (this.first == this.last){
		this.last = null;
	}
	
	this.first = this.first.next;
	this.size--;
	return tm.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
	return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
	return this.size === 0;
  }
}

module.exports = Stack;

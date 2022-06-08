class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length === 0) 
      return true
    else 
      return false
  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    // ... your code goes here
    if(this.stackControl.length < 10) {
      this.stackControl.push(item);

    } else {
      throw new Error('STACK_OVERFLOW');
      
    }

    return this.stackControl;
  }

  pop() {
    // ... your code goes here
    let item;
    if(this.stackControl.length !== 0) {
      item = this.stackControl[this.stackControl.length - 1];
      this.stackControl.slice();
    } else {
      throw new Error('STACK_UNDERFLOW');

    }
    return item;
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

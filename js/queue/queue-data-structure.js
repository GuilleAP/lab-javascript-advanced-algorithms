class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  isEmpty() {
    // ... your code goes here
    if(this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    // ... your code goes here
    if(this.queueControl.length < 10) {
      this.queueControl.push(item);
    } else {
      throw new Error('QUEUE_OVERFLOW');
    }

    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    let item;
    if(this.queueControl.length !== 0) {
      item = this.queueControl[0];
      this.queueControl.shift();
    } else {
      throw new Error('QUEUE_UNDERFLOW');
    }
    return item;
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;

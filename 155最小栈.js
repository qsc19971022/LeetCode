
   
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [Infinity]
  }

  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin(){
    return this.minStack[this.minStack.length - 1];
  }
}
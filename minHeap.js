class minHeap {
  constructor() {
    this.heap = [];
  }
  swap(pre, post) {
    let temp = this.heap[pre];
    this.heap[pre] = this.heap[post];
    this.heap[post] = temp;
  }
  getParentIndex(index) {
    return (index - 1) >> 1
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  insert(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(leftIndex, index);
      this.shiftUp(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(rightIndex, index);
      this.shiftUp(rightIndex);
    }
  }
  pop(){
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const heap = new minHeap();
heap.insert(3);
heap.insert(2);
heap.insert(1);
heap.pop();
heap.peek();
heap.size();
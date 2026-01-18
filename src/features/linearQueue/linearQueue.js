class LinearQueue {
  constructor(maxSize = 6) {
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
    this.onChangeCallback = null;
  }

  onChange(callback) {
    this.onChangeCallback = callback;
  }

  enqueue(item) {
    if (this.rear == this.maxSize - 1) {
      return 0;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear++;
    this.queue[this.rear] = item;
    this.triggerChange();
    console.log(item, "Enqueued!");
  }

  isFull() {
    if (this.rear == this.maxSize - 1) {
      return 1;
    } else {
      return 0;
    }
  }

  dequeue() {
    if (this.front == -1 || this.rear == -1 || this.front > this.rear) {
      console.log("Queue is empty!");
      return 0;
    }
    const removed = this.queue[this.front];
    this.queue[this.front] = null;
    this.front++;

    if (this.front > this.rear) {
      this.rear = this.front = -1;
    }
    this.triggerChange();
    return removed;
  }

  peek() {
    if (this.front == -1 || this.rear == -1 || this.front > this.rear) {
      console.log("Queue is empty");
      return 0;
    } else {
      const front = this.queue[this.front];
      return front;
    }
  }
  reset() {
    if (this.front == -1 || this.rear == -1) {
      return 0;
    }
    this.queue = new Array(this.maxSize);
    this.front = -1;
    this.rear = -1;
    this.triggerChange();
    return 1;
  }
  triggerChange() {
    if (this.onChangeCallback) {
      this.onChangeCallback(this.getItems(), this.front, this.rear);
    }
  }

  getItems() {
    return [...this.queue];
  }
}
export default LinearQueue;

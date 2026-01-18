class CircularQueue {
  constructor(maxSize = 6) {
    this.queue = new Array(maxSize);
    this.maxSize = maxSize;
    this.front = -1;
    this.rear = -1;
    this.onChangeCallback = null;
  }

  onChange(callback) {
    this.onChangeCallback = callback;
  }

  enqueue(value) {
    if (this.front == (this.rear + 1) % this.maxSize) {
      //   console.log("Queue is full!");
      return 0;
    }
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
    }
    this.queue[this.rear] = value;
    console.log(`${value} is enqueued!`);
    this.triggerChange();
    return 1;
  }

  dequeue() {
    if (this.front == -1) {
      console.log("Queue is empty!");
      return 0;
    }
    const removed = this.queue[this.front];
    this.queue[this.front] = null;
    if (this.front == this.rear) {
      this.reset();
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    console.log(`${removed} is dequeued!`);
    this.triggerChange();
    return removed;
  }

  isFull() {
    if (this.front == (this.rear + 1) % this.maxSize) {
      return 1;
    } else {
      return 0;
    }
  }

  reset() {
    if (this.front == -1) {
      return 0;
    } else {
      this.queue = new Array(this.maxSize);
      this.front = -1;
      this.rear = -1;
      this.triggerChange();
    }
  }

  peek() {
    if (this.front == -1) {
      return 0;
    } else {
      return this.queue[this.front];
    }
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

export default CircularQueue;

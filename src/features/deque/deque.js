// deque(double ended queue)

class Deque {
  constructor(maxSize = 5) {
    this.arr = new Array(maxSize);
    this.maxSize = maxSize;
    this.front = -1;
    this.rear = -1;
    this.onChangeCallback = null;
  }
  onChange(callback) {
    this.onChangeCallback = callback;
  }

  isFull() {
    return (
      (this.front == 0 && this.rear == this.maxSize - 1) ||
      this.front == this.rear + 1
    );
  }

  isEmpty() {
    return this.front == -1;
  }

  frontInsert(element) {
    if (this.isFull()) {
      return null;
    }
    if (this.front == -1) {
      this.front = this.rear = 0;
    } else if (this.front == 0) {
      this.front = this.maxSize - 1;
    } else {
      this.front--;
    }
    this.arr[this.front] = element;
    this.triggerChange();
    return 1;
  }

  rearInsert(element) {
    if (this.isFull()) {
      return null;
    }
    if (this.front == -1) {
      this.front = this.rear = 0;
    } else if (this.rear == this.maxSize - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.arr[this.rear] = element;
    this.triggerChange();
    return 1;
  }

  frontRemove() {
    if (this.isEmpty()) {
      return null;
    }
    const removed = this.arr[this.front];

    if (this.front == this.rear) {
      this.arr[this.front] = null;
      this.front = this.rear = -1;
    } else if (this.front == this.maxSize - 1) {
      this.arr[this.front] = null;
      this.front = 0;
    } else {
      this.arr[this.front] = null;
      this.front++;
    }
    this.triggerChange();
    return removed;
  }
  rearRemove() {
    if (this.isEmpty()) {
      return null;
    }

    const removed = this.arr[this.rear];

    if (this.front == this.rear) {
      this.arr[this.front] = null;
      this.front = this.rear = -1;
    } else if (this.rear == 0) {
      this.arr[this.rear] = null;
      this.rear = this.maxSize - 1;
    } else {
      this.arr[this.rear] = null;
      this.rear--;
    }
    this.triggerChange();
    return removed;
  }

  peekFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.arr[this.front];
    }
  }

  peekRear() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.arr[this.rear];
    }
  }

  reset() {
    if (this.isEmpty()) {
      return null;
    } else {
      this.arr = new Array(this.maxSize).fill(null);
      this.front = -1;
      this.rear = -1;
      this.triggerChange();
      return 1;
    }
  }

  triggerChange() {
    if (this.onChangeCallback) {
      this.onChangeCallback(this.getItems(), this.front, this.rear);
    }
  }

  getItems() {
    return [...this.arr];
  }
}

export default Deque;

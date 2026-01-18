class Stack {
  constructor(maxSize = 10) {
    this.items = new Array(maxSize);
    this.maxSize = maxSize;
    this.top = -1;
    this.onChangeCallback = null; // callback for state updates
  }

  // Register observer
  onChange(callback) {
    this.onChangeCallback = callback;
  }

  push(element) {
    if (this.top == this.maxSize - 1) {
      return 0;
    } else {
      this.top++;
      this.items[this.top] = element;
      this.triggerChange();
    }
  }

  pop() {
    if (this.top == -1) {
      return 0;
    }
    const removed = this.items[this.top];
    this.items[this.top] = null;
    this.top--;
    this.triggerChange();
    return removed;
  }

  peek() {
    if (this.top == -1) {
      return 0;
    }
    return this.items[this.top];
  }

  reset() {
    if (this.top == -1) {
      return 0;
    }
    this.items = new Array(this.maxSize);
    this.top = -1;
    this.triggerChange();
  }

  triggerChange() {
    if (this.onChangeCallback) {
      this.onChangeCallback([...this.items], this.top);
    }
  }

  getItems() {
    return [...this.items]; // ALWAYS length = 10
  }
}

export default Stack;

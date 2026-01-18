import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const jsCircularQueueCode = `
class CircularQueue {
  constructor(maxSize = 10) {
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
      console.log("Queue overflow!");
      return;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = value;
    console.log(value, " is enqueued!");
  }

  dequeue() {
    if (this.front == -1) {
      console.log("Queue underflow!");
      return;
    } else {
      const removed = this.queue[this.front];
      this.front = (this.front + 1) % this.maxSize;
      console.log(removed, " is dequeued!");
    }
  }

  peek() {
    if (this.front == -1) {
      console.log("Queue is empty");
    } else {
      console.log("Front element = ", this.queue[this.front]);
    }
  }
}

let cq = new CircularQueue();
cq.dequeue();
cq.enqueue(10);
cq.enqueue(20);
cq.peek();
cq.dequeue();
cq.peek();

  `;

export const cppCircularQueueCode = `
#include <iostream>
using namespace std;
#define MAX 6

class CircularQueue
{
    int arr[MAX];
    int front, rear;

public:
    CircularQueue()
    {
        front = -1;
        rear = -1;
    }
    void enqueue(int value)
    {
        if (front == (rear + 1) % MAX)
        {
            cout << "Queue overflow" << endl;
        }

        else
        {
            front = 0;
            rear = (rear + 1) % MAX;
            arr[rear] = value;
            cout << value << " is enqueued!" << endl;
        }
    }

    void dequeue()
    {
        if (front == -1)
        {
            cout << "Queue underflow!" << endl;
        }
        else
        {
            int x = arr[front];
            front = (front + 1) % MAX;
            cout << x << " is dequeued!" << endl;
        }
    }

    void peek()
    {
        if (front == -1)
        {
            cout << "Queue is empty!";
        }
        else
        {
            cout << "Front element = " << arr[front] << endl;
        }
    }
};

int main()
{
    CircularQueue cq;
    cq.enqueue(10);
    cq.enqueue(20);
    cq.enqueue(30);
    cq.peek();
    cq.dequeue();
}
  `;
export default function CircularQueueCodeDisplay({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsCircularQueueCode : cppCircularQueueCode}
      </SyntaxHighlighter>
    </div>
  );
}

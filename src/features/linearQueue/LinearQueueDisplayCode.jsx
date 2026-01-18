import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const jsLinearQueueCode = `
class LinearQueue {
  constructor(maxSize=6) {
    this.maxSize = maxSize;
    this.queue = [this.maxSize];
    this.front = -1;
    this.rear = -1;
  }
  enqueue(item) {
    if (this.rear == this.maxSize - 1) {
      console.log("Queue overflow!");
      return;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear++;
    this.queue[this.rear] = item;
    console.log(item, " is enqueued!");
  }
  dequeue() {
    if (this.front == -1 || this.rear == -1 || this.front > this.rear) {
      console.log("Queue underflow!");
    } else {
      console.log(this.queue[this.front], " is dequeued!");
      this.front++;
    }
    if (this.front > this.rear) {
      this.rear = this.front = -1;
    }
  }
  peek() {
    if (this.front == -1 || this.rear == -1 || this.front > this.rear) {
      console.log("Queue is empty");
      return;
    } else {
      console.log(this.queue[this.front], " is the first element!");
    }
  }
}

let q = new LinearQueue();
q.enqueue(5);
q.enqueue(7);
q.enqueue(6);
q.peek();
q.dequeue();
q.peek();
q.dequeue();
q.peek();
  `;

export const cppLinearQueueCode = `
#include <iostream>
#define MAX 6
using namespace std;
class LinearQueue
{
private:
    int queue[100];
    int rear, size, front;

public:
    LinearQueue()
    {
        size = MAX;
        front = -1;
        rear = -1;
    }

    void enqueue(int items)
    {
        if (rear == size - 1)
        {
            cout << "Queue overflow!!" << endl;
            return;
        }
        if (front == -1)
        {
            front = 0;
        }
        rear++;
        queue[rear] = items;
        cout << items << " is enqueued into the queue." << endl;
    }
    void dequeue()
    {
        if (front == -1 || rear == -1 || front > rear)
        {
            cout << "Queue underflow" << endl;
        }
        else
        {
            cout << queue[front] << " is dequeued from the queue." << endl;
            front++;
        }

        if (front > rear)
        {
            rear = front = -1;
        }
    }
    void peek()
    {
        if (front == -1 || rear == -1 || front > rear)
        {
            cout << "Queue is empty" << endl;
        }
        else
        {
            cout << queue[front] << " is the first element present in the queue." << endl;
        }
    }
    void display()
    {
        if (front == -1 || rear == -1 || front > rear)
        {
            cout << "Queue is empty" << endl;
        }
        else
        {
            cout << "Elements in the queue is: " << endl;
            for (int i = front; i <= rear; i++)
            {
                cout << queue[i] << " ";
            }
            cout << endl;
        }
    }
};

int main()
{
    LinearQueue lq;
    lq.enqueue(10);
    lq.enqueue(20);
    lq.display();
    lq.peek();
    lq.dequeue();
    lq.display();
    return 0;
}
  `;
export default function LinearQueueDisplayCode({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsLinearQueueCode : cppLinearQueueCode}
      </SyntaxHighlighter>
    </div>
  );
}

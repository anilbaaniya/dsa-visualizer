import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const jsDequeCode = `
class Deque {
  constructor(maxSize = 5) {
    this.arr = new Array(maxSize);
    this.maxSize = maxSize;
    this.front = -1;
    this.rear = -1;
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
      console.log("Deque overflow!");
      return;
    }
    if (this.front == -1) {
      this.front = this.rear = 0;
    } else if (this.front == 0) {
      this.front = this.maxSize - 1;
    } else {
      this.front--;
    }
    this.arr[this.front] = element;
    console.log(element, " is inserted to the front of deque!");
  }

  rearInsert(element) {
    if (this.isFull()) {
      console.log("Deque overflow");
      return;
    }
    if (this.front == -1) {
      this.front = this.rear = 0;
    } else if (this.rear == this.maxSize - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.arr[this.rear] = element;
    console.log(element, " is inserted to the rear of deque!");
  }

  frontRemove() {
    if (this.isEmpty()) {
      console.log("Deque underflow!");
      return;
    }
    const removed = this.arr[this.front];

    if (this.front == this.rear) {
      this.front = this.rear = -1;
    } else if (this.front == this.maxSize - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
    console.log(removed, " is removed from the front of deque!");
  }
  rearRemove() {
    if (this.isEmpty()) {
      console.log("Deque underflow!");
      return;
    }

    const removed = this.arr[this.rear];

    if (this.front == this.rear) {
      this.front = this.rear = -1;
    } else if (this.rear == 0) {
      this.rear = this.maxSize - 1;
    } else {
      this.rear--;
    }
    console.log(removed, "is removed from rear of the deque.");
  }

  peekFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty!");
    } else {
      console.log("Front element = ", this.arr[this.front]);
    }
  }
  peekRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty!");
    } else {
      console.log("Rear element = ", this.arr[this.rear]);
    }
  }
}

const dq = new Deque();
dq.frontInsert(10);
dq.frontInsert(50);
dq.rearInsert(20);
dq.rearInsert(30);
dq.peekFront();
dq.peekRear();
dq.frontRemove();
dq.rearRemove();

  `;

export const cppDequeCode = `
#include <iostream>
using namespace std;
#define size 5

class Deque
{
    int front;
    int rear;
    int arr[size];

public:
    Deque()
    {
        front = -1;
        rear = -1;
    }

    bool isFull()
    {
        return ((front == 0 && rear == size - 1) || front == rear + 1);
    }

    bool isEmpty()
    {
        return (front == -1);
    }

    void frontInsert(int element)
    {
        if (isFull())
        {
            cout << "Deque overflow!" << endl;
            return;
        }
        else if (front == -1)
        {
            front = rear = 0;
        }
        else if (front == 0)
        {
            front = size - 1;
        }
        else
        {
            front--;
        }
        arr[front] = element;
        cout << element << " is inserted at front" << endl;
    }

    void rearInsert(int element)
    {
        if (isFull())
        {
            cout << "Deque overflow!" << endl;
            return;
        }

        else if (front == -1)
        {
            front = rear = 0;
        }

        else if (rear == size - 1)
        {
            rear = 0;
        }
        else
        {
            rear++;
        }
        arr[rear] = element;
        cout << element << " is inserted at rear" << endl;
    }

    void frontRemove()
    {
        if (isEmpty())
        {
            cout << "Deque underflow!" << endl;
            return;
        }
        int element = arr[front];

        if (front == rear)
        {
            front = rear = -1;
        }
        else if (front == size - 1)
        {
            front = 0;
        }
        else
        {
            front++;
        }
        cout << element << " is removed from the deque" << endl;
    }

    void rearRemove()
    {
        if (isEmpty())
        {
            cout << "Deque underflow!" << endl;
        }
        int element = arr[rear];

        if (front == rear)
        {
            front = rear = -1;
        }

        else if (rear == 0)
        {
            rear = size - 1;
        }
        else
        {
            rear--;
        }

        cout << element << " is removed from the Deque" << endl;
    }

    void frontPeek()
    {
        if (isEmpty())
        {
            cout << "Deque is empty!";
        }
        else
        {
            cout << "Front element = " << arr[front];
        }
    }
    void rearPeek()
    {
        if (isEmpty())
        {
            cout << "Deque is empty!";
        }
        else
        {
            cout << "Rear element = " << arr[rear];
        }
    }

    void display()
    {
        if (isEmpty())
        {
            cout << "Deque is empty!";
            return;
        }
        else
        {
            int i = front;
            while (true)
            {
                cout << arr[i] << " ";
                if (i == rear)
                    break;
                i = (i + 1) % size;
            }
            cout << endl;
        }
    }
};

int main()
{
    Deque dq;
    dq.frontInsert(1);
    dq.rearInsert(2);
    dq.display();
    dq.frontInsert(3);
    dq.display();
    dq.frontInsert(4);
    dq.rearInsert(5);
    dq.display();
    dq.frontRemove();
    dq.display();
    dq.rearRemove();
    dq.display();
    return 0;
}
  `;
export default function DequeCodeDisplay({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsDequeCode : cppDequeCode}
      </SyntaxHighlighter>
    </div>
  );
}
